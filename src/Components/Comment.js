import {ImQuotesLeft} from 'react-icons/im';


function Comment(props) {

    return(
        <div className="comment" >
            <div className='details' >
                <span><ImQuotesLeft className='icon-quote' />{props?.fullName}</span>
                <span className='repair-type' ><div className='blue-dot' ></div>{props?.repairType}</span>
            </div>
            <hr/>
            <p>{props?.children}</p>
        </div>
    )
}

export default Comment;