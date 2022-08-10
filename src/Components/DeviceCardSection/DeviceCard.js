import { Link } from 'react-router-dom';
import { useRef } from 'react';

export function DeviceCard(props) {
    const before = useRef(null);
    const image = useRef(null);
    const name = useRef(null);

    const handleMouseEnter = () => {
        const beforeStyle = before.current.style;
        image.current.style.transform = `translateY(-0.8rem)`;
        name.current.style.color = '#476FFF' ;
        beforeStyle.visibility = 'visible';
        beforeStyle.transform = 'rotate(360deg)' ;
        beforeStyle.opacity = 1;
    }

    const handleMouseLeave = () => {
        const beforeStyle = before.current.style;
        image.current.style.transform = '';
        name.current.style.color = '';
        before.current.style.transform = '' ;
        beforeStyle.visibility = '';
        beforeStyle.opacity = '';
    }

    return (
        <Link
            to={props.cardPath}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="before" ref={before} ></div>
            <img 
                loading='lazy'
                src={props.cardSrc} 
                alt={props.cardAlt}
                ref={image} 
            />
            <h4 ref={name} >{props.name}</h4>
        </Link>
    )
}