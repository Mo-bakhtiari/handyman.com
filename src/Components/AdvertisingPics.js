import { Link } from 'react-router-dom';
import warranty from '../assets/zemanat.webp';
import whyHandyman from '../assets/why-handyman.webp';
import furooshgah from '../assets/furooshgah.webp';
import brandLogo from '../assets/brand-logo.webp';
import AddAnimationTo from './AddAnimationTo';



function AdvertisingPics() {

    return (
        <div className="advertising-pics" >
            <AddAnimationTo
                animationName="emergeFromRight"
            >
                <Link to='/warranty-terms' className="warranty" >
                    <img loading='lazy' src={warranty} alt="ًضمانت هم داره" />
                </Link>
                <Link to='/about-us' className="about">
                    <img loading='lazy' src={whyHandyman} alt="ًچرا هندیمن" />
                </Link>
            </AddAnimationTo>
            <AddAnimationTo
                animationName="emergeFromLeft"
            >
                <Link to='/shop' className="shop" >
                    <img loading='lazy' src={furooshgah} alt="ًفروشگاه" />
                </Link>
            </AddAnimationTo>
            <AddAnimationTo
                animationName="emergeFromBottom"
            >
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