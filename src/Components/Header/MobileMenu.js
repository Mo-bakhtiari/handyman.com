import { useEffect, useRef, useState } from 'react';
import handymanServices from '../../assets/handyman-services.webp';
import { LogButton } from './LogButton';
import { Brand } from './Brand';
import { NavMenu } from './NavMenu';
import { Link } from 'react-router-dom';
import { FaWindowClose } from 'react-icons/fa';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { ShoppingCart } from './ShoppingCart';
import ServicesLinkForMobile from './ServicesLinkForMobile';
import { SubMenu } from './ServicesLinkForDesktop';


function MobileMenu({ MenuVisibility, setMenuVisibility }) {
    const [subMenuVisibility, setSubMenuVisibility] = useState(false);
    const mobileMenu = useRef(null);
    const subMenu = useRef(null);
    const mask = useRef(null);

    useEffect(() => {
        handleMenuVisibility(mobileMenu, MenuVisibility);
    }, [MenuVisibility]);

    useEffect(() => {
        handleMenuVisibility(subMenu, subMenuVisibility);
    }, [subMenuVisibility]);

    const handleMenuVisibility = (menuRef, visibility) => {
        const maskStyle = mask.current.style;
        const menuStyle = menuRef.current.style;
        if (visibility) {
            menuStyle.right = 0;
            menuStyle.visibility = 'visible';
            setTimeout(() => {
                maskStyle.backgroundColor = 'rgba(0, 0, 0, 0.409)';
            });
            maskStyle.display = 'block';
        } else {
            menuStyle.right = '';
            menuStyle.visibility = '';
            if (!menuRef.current.className.includes('sub-menu')) {
                maskStyle.backgroundColor = '';
                setTimeout(() => {
                    maskStyle.display = '';
                }, 500);
            }
        }
    }

    const toggleMobileMenu = () => {
        setMenuVisibility(!MenuVisibility);
    };

    const toggleSubMenu = () => {
        setSubMenuVisibility(false);
    }

    const toggleMenu = () => {
        setMenuVisibility(!MenuVisibility);
        setSubMenuVisibility(false);
    }

    return (
        <div >
            <div onClick={toggleMenu} className="mask" ref={mask} ></div>
            <div className="mobile-menu" ref={mobileMenu} >
                <Brand />
                <FaWindowClose
                    onClick={toggleMobileMenu}
                    className="close-btn"
                />
                <div className='mob-menu-log'>
                    <Link to='/login' onClick={toggleMobileMenu} >
                        <LogButton />
                    </Link>
                    <Link to='/shopping-cart' onClick={toggleMobileMenu} >
                        <ShoppingCart />
                    </Link>
                </div>
                <NavMenu
                    servicesLink={<ServicesLinkForMobile setSubMenuVisibility={setSubMenuVisibility} />}
                    clickAction={toggleMobileMenu}
                />
                <img loading='lazy' src={handymanServices} alt='هندیمن در خدمت شما' />
            </div>
            <div className='mobile-menu sub-menu' ref={subMenu} >
                <h3 className='sub-menu-heading' >تعمیرات
                    <BsFillArrowRightSquareFill className='close-btn' onClick={toggleSubMenu} />
                </h3>
                <SubMenu className='nav-menu' clickAction={toggleMenu} />
            </div>
        </div>
    )
}

export default MobileMenu