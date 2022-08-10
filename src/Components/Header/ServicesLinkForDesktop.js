import { useRef } from 'react';
import { Link } from 'react-router-dom';


export function SubMenu({clickAction, reference , ...props}) {
    const handleOnClick = (e) => {
        if (e.target.localName === 'a' ) {
            clickAction()
        }
    }

    return (
        <div 
            ref={reference} 
            onClick={clickAction? handleOnClick : null}
            {...props} 
        >
            <ul >
                <li >
                    <Link to='/repair/washing-machine' >ماشین لباسشویی</Link>
                </li>
                <li >
                    <Link to='/repair/dishwasher' >ماشین ظرفشویی</Link>
                </li>
                <li >
                    <Link to='/repair/vacuum-cleaner' >جاروبرقی</Link>
                </li>
                <li >
                    <Link to='/repair/stove' >اجاق گاز و گاز رومیزی</Link>
                </li>
                <li >
                    <Link to='/services' >سایر لوازم خانگی</Link>
                </li>
            </ul>
        </div>
    )
}

function ServicesLinkForDesktop() {
    const subMenu = useRef(null);

    const handleMouseEnter = () => {
        subMenu.current.style.height = '10em'
        subMenu.current.style.padding = '10px'
        subMenu.current.style.visibility = 'visible';
    }

    const handleMouseLeave = () => {
        subMenu.current.style.height = ''
        subMenu.current.style.padding = ''
        subMenu.current.style.visibility = '';
    }


    return (
        <li >
            <div className="services-link"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Link to='/services' >تعمیرات ⌄</Link>
                <SubMenu className='sub-menu' reference={subMenu} />
            </div>
        </li>
    )
}


export default ServicesLinkForDesktop