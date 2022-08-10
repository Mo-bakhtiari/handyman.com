import { Link } from 'react-router-dom';
import fastBilling from '../assets/fast-billing.png';
import fastServices from '../assets/fast-services.png';
import warranty from '../assets/warranty.png';
import professionalTechnician from '../assets/professional-technician.png';
import customerService from '../assets/customer-service.png';
import AddAnimationTo from './AddAnimationTo';




function ServiceAdvanteges() {

    return (
        <AddAnimationTo
            animationName="emergeFromBottom"
            aproximateHeight={80} >
            <div className="service-advanteges-wrapper" >
                <div className="service-advanteges" >
                    <Link to='/service-features' >
                        <span><img loading='lazy' src={fastBilling} alt=''  /></span>
                        <span className='text' >اعلام هزینه قطعی تعمیرات</span>
                    </Link>
                    <Link to='/service-features' >
                        <span><img loading='lazy' src={fastServices} alt='' /> </span>
                        <span className='text' >سرعت بالای خدمات</span>
                    </Link>
                    <Link to='/service-features' >
                        <span><img loading='lazy' src={warranty} alt='' /></span>
                        <span className='text' >6 ماه ضمانت خدمات</span>
                    </Link>
                    <Link to='/service-features' >
                        <span><img loading='lazy' src={professionalTechnician} alt='' /></span>
                        <span className='text' >تکنسین های مجرب و بااخلاق</span>
                    </Link>
                    <Link to='/service-features' >
                        <span><img loading='lazy' src={customerService} alt='' /></span>
                        <span className='text' >پشتیبانی همه جانبه</span>
                    </Link>
                </div>
            </div>
        </AddAnimationTo>
    )
}


export default ServiceAdvanteges