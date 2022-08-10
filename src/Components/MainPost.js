import {PrimaryButton, SecondaryButton} from './buttons';
import {Link} from 'react-router-dom';

function MainPost(props) {

    const iconCreator = (iconName) => {
        const Icon = iconName;
        return Icon? <Icon /> : null;
    }

    return(
        <div className={`main-post ${props?.className? props.className : ''}`} >
            <h5><span className="appendage" >{props?.children}</span>{props?.firstMessage}</h5>
            <h1>{props?.secondMessage}</h1>
            <p>{props?.description}</p>
            <div>
                <Link to={props?.secondaryBtnPath? props.secondaryBtnPath : '/' } >
                    <SecondaryButton >{props?.secondaryBtnMessage}</SecondaryButton>
                </Link>
                {props?.primaryBtnMessage? 
                    <Link to={props?.primaryBtnPath? props.primaryBtnPath : '/' } >
                        <PrimaryButton>
                            {props?.primaryBtnMessage}
                            {iconCreator(props?.primaryBtnIcon)}
                        </PrimaryButton>
                    </Link>
                    :
                    null
                }
            </div>
        </div>
    )
}


export default MainPost;