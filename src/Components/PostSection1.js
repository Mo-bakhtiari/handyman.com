import AddAnimationTo from './AddAnimationTo';
import ImageWobbler from './ImageWobbler';
import MainPost from './MainPost';
import multihandImg from '../assets/multihand.webp';



function PostSection1() {

    return (
        <div className="post-section section-1" >
            <AddAnimationTo
                animationName="emergeFromRight"
            >
                <ImageWobbler src={multihandImg} alt="همه فن حریف" />
            </AddAnimationTo>
            <AddAnimationTo
                animationName="emergeFromLeft"
            >
                <MainPost
                    firstMessage='نصب و تعمیر لوازم خانگی در منزل شما در کوتاه ترین زمان'
                    secondMessage='آسایش شما دغدقه‌ی ماست'
                    description='هندیمن مرکز تخصصی نصب، آموزش و تعمیرات لوازم خانگی در ایران بوده و مجری تخصصی خدمات پس از فروش برندهای مطرح جهان می‌باشد. وجه تمایز این مجموعه تاکید بر آموزش رایگان به صورت همگانی می‌باشد. علاوه بر آن، گردآوری تیم تخصصی تعمیرات، استفاده از قطعات اصلی، ارائه فاکتور و گارانتی رسمی است.'
                    secondaryBtnMessage='تعمیرکار'
                    primaryBtnMessage='فروشگاه'
                    secondaryBtnPath='/services'
                    primaryBtnPath='/shop'
                />

            </AddAnimationTo>
        </div>
    )
}

export default PostSection1