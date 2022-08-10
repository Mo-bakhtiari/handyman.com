import { Link } from 'react-router-dom';
import {useRef} from 'react';


function MagazineCard(props) {
    const imgLayer = useRef(null);
    const readingTime = useRef(null);
    const topic = useRef(null);
    const continueReading = useRef(null);
    
    const handleCardHover = () => {
        imgLayer.current.style.opacity = 0.7;
        readingTime.current.style.opacity = 1;
        continueReading.current.style.color = '#DAD674';
        continueReading.current.style.padding = '10px 10%';
    }

    const handleMouseLeave = () => {
        imgLayer.current.style.opacity = '';
        readingTime.current.style.opacity = '';
        continueReading.current.style.color = '';
        continueReading.current.style.padding = '';
    }


    return (
        <article 
            className="magazine-card"
            onMouseEnter={handleCardHover}
            onMouseLeave={handleMouseLeave} 
        >
            <Link to={props?.cardPath} className="magazine-img" >
                <img src={props?.imageSrc} alt={props?.imageAlt} />
                <div className="img-layer" ref={imgLayer} ></div>
                <div className='reading-time' ref={readingTime}>
                    <span>مدت مطالعه:</span>{props?.readingDuration}
                </div>
            </Link>
            <h4>
                <Link to={props?.cardPath} ref={topic} >
                    {props?.topic}
                </Link>
            </h4>
            <p>{props?.cutDownDescription}</p>
            <Link 
                to={props?.cardPath} 
                className="continue-reading"
                ref={continueReading} 
            >
                <strong>
                    ادامه مطلب
                </strong>
            </Link>
            <div className="blue-dot" ></div>
        </article>
    )
}


export default MagazineCard;