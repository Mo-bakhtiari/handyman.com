import React from 'react';
import { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { flushSync } from 'react-dom';
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io';

export function CarouselItem({ children, width}) {

    return (
        <div 
            className="carousel-item" 
            style={{ width: width }}
        >
            {children}
        </div>
    )
}

function Carousel({ children, stepLength = 2, ...props }) {
    const length = useRef(React.Children.count(children));
    const initalIndex = useRef(length.current / stepLength)
    const totalSteps = useRef((2 * length.current) / stepLength);
    const {
        NOActiveItems = length.current,
        decrementRatio = 1,
        decrementOffset = 1,
        turnOnSlideShow = true,
    } = props;

    const [activeIndex, setActiveIndex] = useState(length.current / stepLength);
    const [totalActiveItems, setTotalActiveItems] = useState(NOActiveItems);
    const [transitionOff, setTransitionOff] = useState(false);
    const [slideShowIsOff, setSlideShowIsOff] = useState(false);
    const [touchPosition, setTouchPosition] = useState(null);

    useLayoutEffect(() => {
        window.addEventListener('resize', windowResizeHandler)
        windowResizeHandler();
        return () => { window.removeEventListener('resize', windowResizeHandler) }
    }, [totalActiveItems]);

    useEffect(() => {
        if (activeIndex !== 0 && activeIndex !== totalSteps.current) {
            setTransitionOff(false)
        }
    });

    useEffect(() => {
        if (!slideShowIsOff && totalActiveItems !== length.current && turnOnSlideShow) {
            const intervalId = setInterval(() => {
                updateIndex(activeIndex + 1);
            }, 4000)
            return () => {
                if (intervalId) {
                    clearInterval(intervalId);
                }
            }
        }
    });

    const updateIndex = (index) => {
        if (index < 0) index = 0;
        if (index > totalSteps.current) index = totalSteps.current;
        setActiveIndex(index);
    }

    const handleInfiniteLoop = () => {
        if (activeIndex === 0 || activeIndex === totalSteps.current) {
            flushSync(() => {
                setTransitionOff(true);
                setActiveIndex(initalIndex.current);
            })
        }
    }

    const windowResizeHandler = () => {
        if (window.innerWidth > 1200) {
            setTotalActiveItems(NOActiveItems);
        } else if (window.innerWidth > 998) {
            setTotalActiveItems(Math.ceil(NOActiveItems - (decrementRatio + decrementOffset)));
        } else if (window.innerWidth > 650) {
            setTotalActiveItems(Math.ceil(NOActiveItems - (2 * decrementRatio + decrementOffset)));
        } else if (window.innerWidth > 320) {
            setTotalActiveItems(Math.ceil(NOActiveItems - (3 * decrementRatio + decrementOffset)));
        } else if (window.innerWidth > 0) {
            setTotalActiveItems(Math.ceil(NOActiveItems - (4 * decrementRatio + decrementOffset)));
        }
    }

    const reperduceChildren = () => {
        const childrenArray = React.Children.toArray(children);
        const tripledChildrenArray = [...childrenArray, ...childrenArray, ...childrenArray];
        const reperducedChildren = tripledChildrenArray.map((child, index) => {
            return React.cloneElement(child, { width: `${100 / totalActiveItems}%`, key: index })
        })
        return reperducedChildren;
    }

    const handleMouseEnter = () => {
        setSlideShowIsOff(true);
    }

    const handleMouseLeave = () => {
        setSlideShowIsOff(false);
    }

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition;

        if (touchDown === null) {
            return;
        }

        const currentTouch = e.touches[0].clientX;
        const diff = currentTouch - touchDown;

        if (diff > 5) {
            updateIndex(activeIndex - 1);
        }

        if (diff < -5) {
            updateIndex(activeIndex + 1);
        }

        setTouchPosition(null);
    }

    return (
        <div className="carousel-wrapper" >
            <div className="carousel" >
                <div
                    className="carousel-inner"
                    onTransitionEnd={handleInfiniteLoop}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    style={{
                        transform: `translateX(${activeIndex * (-stepLength * (100 / totalActiveItems))}%)`,
                        transition: transitionOff ? 'none' : ''
                    }}
                >
                    {reperduceChildren()}
                </div>
            </div>
            <div
                className="carousel-nav"
                style={{ display: totalActiveItems === length.current ? 'none' : 'flex' }}
            >
                <IoIosArrowDropright
                    className="arrow right"
                    onClick={() => { updateIndex(activeIndex + 1) }}
                />
                <IoIosArrowDropleft
                    className="arrow left"
                    onClick={() => { updateIndex(activeIndex - 1) }}
                />
            </div>
        </div>
    )
}

export default Carousel;