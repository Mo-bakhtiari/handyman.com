import { useEffect, useRef } from 'react';
import handymanServices from '../../assets/handyman-services.jpg';
import { LogButton } from './LogButton';
import { Brand } from './Brand';
import { NavMenu } from './NavMenu';
import { Link } from 'react-router-dom';
import { SecondaryButton } from '../buttons';
import {FaWindowClose} from 'react-icons/fa';
import {FaPhoneAlt} from 'react-icons/fa';


export function MobileMenu({ MenuVisibility, setMenuVisibility, setReqWindowVisibility }) {
    const mobileMenu = useRef(null);
    useEffect(() => {
        const maskStyle = mobileMenu.current.firstElementChild.style;
        const menuStyle = mobileMenu.current.lastElementChild.style;
        if (MenuVisibility) {
            menuStyle.right = 0;
            setTimeout(() => {
                maskStyle.backgroundColor = 'rgba(0, 0, 0, 0.409)';
            });
            maskStyle.display = 'block';
        } else {
            menuStyle.right = '';
            maskStyle.backgroundColor = '';
            setTimeout(() => {
                maskStyle.display = '';
            }, 500);

        }
    });

    const toggleMobileMenu = () => {
        setMenuVisibility(!MenuVisibility);
    };

    const toggleRequestWindow = () => {
        setReqWindowVisibility(true)
    }

    return (
        <div ref={mobileMenu}  >
            <div onClick={toggleMobileMenu} className="mask" ></div>
            <div className="mobile-menu" >
                <Brand />
                <FaWindowClose
                    onClick={toggleMobileMenu}
                    className="fa-square-xmark"
                />
                <div className='mob-menu-phone'>
                    <Link to='/login' >
                        <LogButton />
                    </Link>
                    <SecondaryButton onClick={toggleRequestWindow} >
                        <FaPhoneAlt className="fa-phone"/>
                        021-54321
                    </SecondaryButton>
                </div>
                <NavMenu />
                <img loading='lazy' src={handymanServices} />
            </div>
        </div>
    )
}