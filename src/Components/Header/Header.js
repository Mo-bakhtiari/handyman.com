import { Link } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import { Brand } from './Brand';
import { LogButton } from './LogButton';
import { NavMenu } from './NavMenu';
import { ShoppingCart } from './ShoppingCart';
import { ToggleBars } from './ToggleBars';
import { SearchBox } from './SearchBox';
import { DialButton } from './DialButton';
import { MobileMenu } from './MobileMenu';
import { RequestWindow } from './RequestWindow';
import { RequestServices } from './RequestServices';
import AddAnimationTo from '../AddAnimationTo';


export default function Header(props) {
    const [MenuVisibility, setMenuVisibility] = useState(false)
    const [reqWindowVisibility, setReqWindowVisibility] = useState(false)

    return (
        <AddAnimationTo
            animationName="emergeFromTop"
            aproximateHeight={200} >
            <header className='head-wrapper'>
                <Brand />
                <Link to='/login' >
                    <LogButton />
                </Link>
                <Link to='/shopping-cart' >
                    <ShoppingCart />
                </Link>
                <ToggleBars MenuVisibility={MenuVisibility} setMenuVisibility={setMenuVisibility} />
                <NavMenu />
                <SearchBox />
                <DialButton setReqWindowVisibility={setReqWindowVisibility} />
                <MobileMenu
                    MenuVisibility={MenuVisibility}
                    setMenuVisibility={setMenuVisibility}
                    setReqWindowVisibility={setReqWindowVisibility}
                />
                <RequestWindow reqWindowVisibility={reqWindowVisibility} setReqWindowVisibility={setReqWindowVisibility} />
                <RequestServices setReqWindowVisibility={setReqWindowVisibility} />
            </header>
        </AddAnimationTo> 
    )
}