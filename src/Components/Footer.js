import AddAnimationTo from './AddAnimationTo';
import brandLogo from '../assets/brand-logo.png';
import { Link } from 'react-router-dom';
import otaghAsnaf from '../assets/Otagh-Asnaf.png';
import enamad from '../assets/enamad.png';
import { MdOutlineLocationOn } from "react-icons/md";
import { FiAtSign } from "react-icons/fi";
import { BiPhoneCall } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { TbHeadset } from 'react-icons/tb';



function Footer() {

    return (
        <AddAnimationTo
            animationName="emergeFromBottom"
            aproximateHeight={500} >
            <footer id="footer" >
                <div className="brand-logo" >
                    <div className='veil' ></div>
                    <img loading='lazy' src={brandLogo} alt='logo' />
                    <p>هندیمن</p>
                </div>
                <div className="main-content" >
                    <div className="credit" >
                        <p>هندیمن دقیقا همونجایی هستش که برای حال خوب لوازم خونگی بهش نیاز داری! اینجا بخند، حتی وقتی لوازم خونگیت داغونه...</p>
                        <Link target='_blank' to='https://logo.samandehi.ir/Verify.aspx?id=207102&p=uiwkobpdjyoerfthobpduiwk' >
                            <img loading='lazy'
                                src='https://logo.samandehi.ir/logo.aspx?id=207102&p=odrflymayndtnbpdlymaodrf'
                                alt='نماد ساماندهی'
                            />
                        </Link>
                        <Link referrerPolicy='origin' target='_blank' to='https://trustseal.enamad.ir/?id=188439&Code=D2mFpJXPQFfgy9FKWkwr' >
                            <img loading='lazy' src='https' alt='نماد اعتماد الکترونیکی' />
                        </Link>
                        <Link to='/' >
                            <img loading='lazy' src={otaghAsnaf} alt='اتاق اصناف ایران' />
                        </Link>
                    </div>
                    <div className="contact-info" >
                        <ul className="" >
                            <li className="address" >
                                <MdOutlineLocationOn />
                                <span> تهران، خیابان شریعتی ، نرسیده به پل سیدخندان، پلاک 874 ( جنب لوستر آذین ) ، طبقه چهارم </span>
                            </li>
                            <li className="" >
                                <FiAtSign />
                                <span>
                                    <a href='mailto:handyman.com@gmail.com' rel='nofollow'>
                                        handyman.com@gmail.com
                                    </a>
                                </span>
                            </li>
                            <li className="" >
                                <BiPhoneCall />
                                <span>
                                    <a href='tel:012345678' rel='nofollow'>012345678</a>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="options" >
                        <ul>
                            <li>
                                <Link to='/shop' >فروشگاه</Link>
                            </li>
                            <li>
                                <Link to='/shop' >نحوه سفارش محصول</Link>
                            </li>
                            <li>
                                <Link to='/shop' >روش های ارسال</Link>
                            </li>
                            <li>
                                <Link to='/shop' >رویه بازگرداندن محصول</Link>
                            </li>
                            <li>
                                <Link to='/shop' >تماس با ما</Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to='/' >خدمات</Link>
                            </li>
                            <li>
                                <Link to='/' >مراحل درخواست تعمیرات</Link>
                            </li>
                            <li>
                                <Link to='/' >شرایط ضمانت نامه</Link>
                            </li>
                            <li>
                                <Link to='/' >مجله آموزشی</Link>
                            </li>
                            <li>
                                <Link to='/' >درباره ما</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="copyright-alert" >
                    <span>تمام حقوق مادی و معنوی این وب سایت متعلق به هندیمن می باشد.</span>
                    <div className='contact' >
                        <a href='http://instagram.com/_u/handymancom/' >
                            handymancom
                            <BsInstagram />
                        </a>
                        |
                        <a href='tel:01235678' >
                            01235678
                            <TbHeadset />
                        </a>
                    </div>
                </div>
            </footer>
        </AddAnimationTo>
    )
}



export default Footer;