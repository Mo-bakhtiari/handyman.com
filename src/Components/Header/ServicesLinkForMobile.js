import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';


function ServicesLinkForMobile({ setSubMenuVisibility }) {

    const handleSubMenu = () => {
        setSubMenuVisibility(true);
    }

    return (
        <li >
            <Link to='/services' >تعمیرات</Link>
            <BsFillArrowLeftSquareFill
                onClick={handleSubMenu}
                className="sub-menu-btn"
            />
        </li>
    )
}

export default ServicesLinkForMobile