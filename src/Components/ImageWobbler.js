import { useState, useRef, useEffect } from 'react';


function ImageWobbler(props) {

    const [angle, setAngle] = useState({ x: 0, y: 0 });
    const [offset, setOffset] = useOffsetCalculator();
    const [imageCenter, setImageCenter] = useState({ xCenter: 0, yCenter: 0 })
    const imageBox = useRef(null);
    const image = useRef(null);

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        const page = document.querySelector('html');
        const pageResizeObserver = new ResizeObserver(() => {
            findImageCenter();
        });
        pageResizeObserver.observe(page);
        return () => { 
            window.removeEventListener('resize', handleWindowResize); 
            pageResizeObserver.unobserve(page);
        }
    }, [offset.xOff, offset.yOff, image, imageBox]);

    useEffect(() => {
        if (image.current) {
            image.current.style.transform = `rotateX(${angle.y}deg) rotateY(${angle.x}deg)`;
        }
    }, [angle.x, angle.y, image]);

    const findImageCenter = () => {
        if (image.current && imageBox.current) {
            setOffset(image);
            const xCenter = imageBox.current.offsetWidth / 2 + offset.xOff;
            const yCenter = imageBox.current.offsetHeight / 2 + offset.yOff;
            setImageCenter({ xCenter, yCenter });
        }
    }

    const handleMouseMove = (e) => {
        const modifiedAngleX = (imageCenter.xCenter - e.pageX) / 15;
        const modifiedAngleY = (e.pageY - imageCenter.yCenter) / 15;
        setAngle({ x: modifiedAngleX, y: modifiedAngleY });
    }

    const handleMouseLeave = () => {
        setAngle({ x: 0, y: 0 });
    }

    const handleWindowResize = () => {
        findImageCenter();
    }

    return (
        <div
            ref={imageBox}
            className="wobbling-img-wrapper"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave} >
            <img
                loading='lazy'
                {...props}
                className="wobbling-img"
                ref={image}
            />
        </div>
    )
}

function useOffsetCalculator() {
    const [offset, setOffset] = useState({ xOff: 0, yOff: 0 });
    const calcOffset = (image) => {
        let imageCopy = image.current;
        let x = 0;
        let y = 0;
        do {
            x += imageCopy.offsetLeft;
            y += imageCopy.offsetTop;
        } while ((imageCopy = imageCopy.offsetParent) !== null);
        setOffset({ xOff: x, yOff: y })
    }
    return [offset, calcOffset];
}


export default ImageWobbler