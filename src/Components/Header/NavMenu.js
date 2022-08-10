import { Link, Outlet } from 'react-router-dom';
import { useEffect, useLayoutEffect, useState } from 'react';


export function NavMenu({ clickAction, servicesLink }) {

    useEffect(() => {
        const navItems = document.querySelectorAll('.nav-menu a');
        handleNavItemHighlight(navItems)();
        window.addEventListener('popstate', handleNavItemHighlight(navItems))
        window.addEventListener('click', handleNavItemHighlight(navItems));
        return () => {
            window.removeEventListener('popstate', handleNavItemHighlight(navItems))
            window.removeEventListener('click', handleNavItemHighlight(navItems))
        }
    }, []);

    const handleNavItemHighlight = (navItems) => {
        return () => {
            const url = window.location.href;
            const alreadyActive = document.querySelectorAll('.nav-menu .active');
            alreadyActive.forEach((el) => {
                el.classList.remove('active');
            })
            for (let i = 0; i < navItems.length; i++) {
                if (navItems[i].href === url) {
                    navItems[i].classList.add('active');
                }
            }
        }
    }

    const handleOnClick = (e) => {
        if (e.target.localName === 'a') {
            clickAction()
        }
    }

    return (
        <nav className="nav-menu" >
            <ul onClick={clickAction ? handleOnClick : null} >
                <li >
                    <Link to='/' >صفحه اصلی</Link>
                </li>
                {servicesLink}
                <li >
                    <Link to='/shop' >فروشگاه</Link>
                </li>
                <li >
                    <Link to='/instructions' >آموزشی</Link>
                </li>
                <li >
                    <Link to='/about-us' >درباره ما</Link>
                </li>
            </ul>
            <Outlet />
        </nav>
    )
}