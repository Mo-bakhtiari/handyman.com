import { Link } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import { Brand } from './Brand';
import { LogButton } from './LogButton';
import { NavMenu } from './NavMenu';
import { ShoppingCart } from './ShoppingCart';
import { ToggleBars } from './ToggleBars';
import { SearchBox } from './SearchBox';
import { RequestWindow } from './RequestWindow';
import { RequestServices } from './RequestServices';
import AddAnimationTo from '../AddAnimationTo';
import ServicesLinkForDesktop from './ServicesLinkForDesktop';
const MobileMenuPromise = import('./MobileMenu');
const MobileMenu = React.lazy(() => MobileMenuPromise);


export default function Header(props) {
    const [MenuVisibility, setMenuVisibility] = useState(false)
    const [reqWindowVisibility, setReqWindowVisibility] = useState(false)

    return (
        <AddAnimationTo
            animationName="emergeFromTop"
        >
            <header className='head-wrapper'>
                <Brand />
                <Link to='/login' >
                    <LogButton />
                </Link>
                <Link to='/shopping-cart' >
                    <ShoppingCart />
                </Link>
                <ToggleBars MenuVisibility={MenuVisibility} setMenuVisibility={setMenuVisibility} />
                <NavMenu servicesLink={<ServicesLinkForDesktop />} />
                <SearchBox />
                <MobileMenu
                    MenuVisibility={MenuVisibility}
                    setMenuVisibility={setMenuVisibility}
                    setReqWindowVisibility={setReqWindowVisibility}
                />
            </header>
                <RequestWindow reqWindowVisibility={reqWindowVisibility} setReqWindowVisibility={setReqWindowVisibility} />
                <RequestServices setReqWindowVisibility={setReqWindowVisibility} />
        </AddAnimationTo>
    )
}