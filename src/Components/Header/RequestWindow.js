import { SecondaryButton } from '../buttons';
import {ImCross} from 'react-icons/im';
import {useRef, useEffect} from 'react';



export function RequestWindow({reqWindowVisibility, setReqWindowVisibility}) {
    const requestWindow = useRef(null);
    useEffect(() => {
        const requestWindowStyle = requestWindow.current.style;
        reqWindowVisibility? 
            requestWindowStyle.display = 'flex'
            :
            requestWindowStyle.display = 'none';
    })

    const toggleRequestWindow = () => {
        setReqWindowVisibility(false);
    }
    
    return (
        <div ref={requestWindow} className='Request-window-wrapper' >
            <div className="Request-window" >
                <ImCross onClick={toggleRequestWindow} />
                <h2>this is the request window</h2>
            </div>
        </div>
    )
}

