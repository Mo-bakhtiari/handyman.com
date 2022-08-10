import AddAnimationTo from './AddAnimationTo';
import ImageWobbler from './ImageWobbler';
import MainPost from './MainPost';
import handymanServices from '../assets/handyman-services.webp';
import {GiRotaryPhone} from 'react-icons/gi';


function PostSection2() {

    return (
        <div className="post-section section-2" >
            <AddAnimationTo
                animationName="emergeFromLeft"
            >
                <ImageWobbler src={handymanServices} alt="هندیمن در خدمت شما" />
            </AddAnimationTo>
            <AddAnimationTo
                animationName="emergeFromRight"
            >
                <MainPost
                    firstMessage='بیش از 60000 مشترک فعال'
                    secondMessage='داستان هندیمن از کجا شروع شد؟'
                    description={`داستان شکل‌گیری هندیمن به سال 1385 که در زمینه آموزش تعمیرات لوازم برقی شروع به کار کردیم، بازمی‌گردد. روند تکاملی موفقیت‌ها برآن شد که در کنار آموزش، به سمت تامین قطعات لوازم برقی خانگی مثل ماشین لباسشویی، ماشین ظرفشویی و انواع یخچال فریزرهای خانگی پیش رویم.
بعد از پنج سال فعالیت صادقانه، کوله‌باری از تجربه‌های تخصصی در زمینه تعمیرات کسب شد که ما را به یکی از بهترین‌های کشور تبدیل کرد. تصمیم گرفتیم این تجربیات را با دیگران به اشتراک بگذاریم و این‌گونه بود که از سال 1390، تخصصی‌ترین دوره‌‌های آموزشی تعمیر لوازم خانگی توسط تیم ما برگزار شد`}
                    secondaryBtnMessage='بیشتر بدانید'
                    primaryBtnMessage='تماس با ما'
                    secondaryBtnPath='/services'
                    primaryBtnPath='/shop'
                    primaryBtnIcon={GiRotaryPhone}
                />
            </AddAnimationTo>
        </div>
    )
}

export default PostSection2