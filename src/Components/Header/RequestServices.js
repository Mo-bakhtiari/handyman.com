import { TbHeadset } from 'react-icons/tb';
import { useRef } from 'react';


export function RequestServices({ setReqWindowVisibility }) {
    const headphone = useRef(null);

    const handleMouseEnter = () => {
        const headphoneStyle = headphone.current.style;
        headphoneStyle.transform = 'rotate(360deg)'
    }
    
    const handleMouseLeave = () => {
        const headphoneStyle = headphone.current.style;
        headphoneStyle.transform = 'rotate(0deg)'
    }

    return (
        <div
            className="request-services"
            onClick={() => setReqWindowVisibility((prevState) => !prevState)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <p>ثبت سفارش خدمات</p>
            <div className="" >
                <span ref={headphone}>
                    <TbHeadset  />
                </span>
                <div>021-54321</div>
            </div>
        </div>
    )
}