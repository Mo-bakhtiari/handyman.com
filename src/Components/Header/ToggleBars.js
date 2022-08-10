import {FaBars} from 'react-icons/fa';


export function ToggleBars({ MenuVisibility, setMenuVisibility }) {

    return (
        <div className="toggle-bars" >
            <FaBars
                onClick={() => setMenuVisibility(!MenuVisibility)}
                className="fa-bars"
                aria-hidden="true"
            />
        </div>
    )
}