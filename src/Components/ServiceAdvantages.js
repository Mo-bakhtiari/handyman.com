import { Link } from 'react-router-dom';
import fastBilling from '../assets/fast-billing.webp';
import fastServices from '../assets/fast-services.webp';
import warranty from '../assets/warranty.webp';
import professionalTechnician from '../assets/professional-technician.webp';
import customerService from '../assets/customer-service.webp';
import AddAnimationTo from './AddAnimationTo';




function ServiceAdvantages() {

    return (
        <AddAnimationTo
            animationName="emergeFromBottom"
        >
            <div className="service-advantages-wrapper" >
                <div className="service-advantages" >
                    <Link to='/service-features' >
                        <span><img loading='lazy' src={fastBilling} alt='اعلام هزینه'  /></span>
                        <span className='text' >اعلام هزینه قطعی تعمیرات</span>
                    </Link>
                    <Link to='/service-features' >
                        <span><img loading='lazy' src={fastServices} alt='سرعت بالا' /> </span>
                        <span className='text' >سرعت بالای خدمات</span>
                    </Link>
                    <Link to='/service-features' >
                        <span><img loading='lazy' src={warranty} alt='ضمانت' /></span>
                        <span className='text' >6 ماه ضمانت خدمات</span>
                    </Link>
                    <Link to='/service-features' >
                        <span><img loading='lazy' src={professionalTechnician} alt='حرفه ای' /></span>
                        <span className='text' >تکنسین های مجرب و بااخلاق</span>
                    </Link>
                    <Link to='/service-features' >
                        <span><img loading='lazy' src={customerService} alt='پشتیبانی' /></span>
                        <span className='text' >پشتیبانی همه جانبه</span>
                    </Link>
                </div>
            </div>
        </AddAnimationTo>
    )
}


export default ServiceAdvantages