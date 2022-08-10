import { Link } from 'react-router-dom';
import warranty from '../assets/zemanat.png';
import whyHandyman from '../assets/why-handyman.jpg';
import furooshgah from '../assets/furooshgah.jpg';
import brandLogo from '../assets/brand-logo.png';
import AddAnimationTo from './AddAnimationTo';



function AdvertisingPics() {

    return (
        <div className="advertising-pics" >
            <AddAnimationTo
                animationName="emergeFromRight"
                aproximateHeight={200} >
                <Link to='/warranty-terms' className="warranty" >
                    <img loading='lazy' src={warranty} alt="ًضمانت هم داره" />
                </Link>
                <Link to='/about-us' className="about">
                    <img loading='lazy' src={whyHandyman} alt="ًچرا هندیمن" />
                </Link>
            </AddAnimationTo>
            <AddAnimationTo
                animationName="emergeFromLeft"
                aproximateHeight={500} >
                <Link to='/shop' className="shop" >
                    <img loading='lazy' src={furooshgah} alt="ًفروشگاه" />
                </Link>
            </AddAnimationTo>
            <AddAnimationTo
                animationName="emergeFromBottom"
                aproximateHeight={200} >
                <Link to='/' className="brand" >
                    <div className="brand" >
                        <img loading='lazy' src={brandLogo} alt="لوگو" />
                        <span>
                            <h1>هندیمن</h1>
                            <h4>مرکز تخصصی خدمات لوازم خانگی</h4>
                        </span>
                    </div>
                </Link>
            </AddAnimationTo>

        </div>
    )
}

export default AdvertisingPics;