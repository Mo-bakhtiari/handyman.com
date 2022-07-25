import { Link, Outlet} from 'react-router-dom';


export function NavMenu() {
    return (
        <nav >
            <ul >
                <li >
                    <Link to='/' >صفحه اصلی</Link>
                </li>
                <li >
                    <Link to='/services' >تعمیرات</Link>
                </li>
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