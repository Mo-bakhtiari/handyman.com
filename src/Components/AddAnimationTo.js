import { useEffect, useCallback, useState, useRef, useLayoutEffect } from 'react';
import React from 'react';




function AddAnimationTo(props) {
    const { children,
            animationName = 'emergeFromBottom',
            animationDuration = '2s',} = props;
    const [isIntersecting, setIsIntersecting] = useState(false);
    const childContainer = useRef(null);

    const callback = useCallback((entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            setIsIntersecting(true)
        }
    }, []);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0,
        }
        const observer = new IntersectionObserver(callback, options);
        childContainer.current.childNodes.forEach(child => {
            observer.observe(child)
        })
        return () => {
            observer.disconnect();
        }
    }, []);

    useEffect(() => {
        const wrapper = childContainer.current;
        if (wrapper) {
            if (isIntersecting) {
                wrapper.style.visibility = 'visible';
                wrapper.childNodes.forEach(child => child.style.animation = animationName + ' ' + animationDuration);
            }
        }
    }, [isIntersecting, childContainer]);


    return (
        <div
            ref={childContainer}
            style={{
                visibility: 'hidden',
                display: 'contents',
            }}
        >
            {children}
        </div>
    )
}





export default AddAnimationTo;