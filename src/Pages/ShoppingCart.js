// export default function ShoppingCart () { 
//     return (
//         <h1>this is Shopping Cart page</h1>
//     )
// }





import AddAnimationTo from '../Components/AddAnimationTo';
import ImageWobbler from '../Components/ImageWobbler';
import MainPost from '../Components/MainPost';
import shopPic from '../assets/shop-pic.jpg';
import shopBag from '../assets/shop.png';


function ShoppingCart() {

    return (
        <div>
        <div className="post-section section-3" >
            <AddAnimationTo
                animationName="emergeFromRight"
                aproximateHeight={510}
            >
                <ImageWobbler loading='' src={shopPic} alt="از فروشگاه ما دیدن کنید" />
            </AddAnimationTo>
            <AddAnimationTo
                animationName="emergeFromLeft"
                aproximateHeight={510} >
                <MainPost
                    firstMessage='محصولات کاربردی و متنوع'
                    secondMessage='داستان هندیمن از کجا شروع شد؟'
                    description={`فروشگاه هندیمن با داشتن بیشترین متقاضی از سراسر کشور برای خرید قطعات دستگاه ، شوینده مناسب ، کیسه ی جاروبرقی ، و خرید انواع لوازم جانبی ، در خدمت شما مشتریان گرامی می‌باشد.
فروشگاه آنلاین مجموعه ما بر پایه اعتماد شما بنا گشت و همواره برآن است تا این مسیر را در جهت کسب رضایت دائمی مشتریان پیش برده و با کیفیت و خدمات رسانی هرچه تمام تر ، لذت یک خرید آنلاین با آسودگی خاطر را به شما هدیه دهد.`}
                    secondaryBtnMessage='مشاهده محصولات'
                    secondaryBtnPath='/shop'
                >
                    <img loading='' src={shopBag} alt="shop" />
                </MainPost>
            </AddAnimationTo>
        </div>
        <div className="post-section section-3" >
            <AddAnimationTo
                animationName="emergeFromRight"
                aproximateHeight={510}
            >
                <ImageWobbler loading='' src={shopPic} alt="از فروشگاه ما دیدن کنید" />
            </AddAnimationTo>
            <AddAnimationTo
                animationName="emergeFromLeft"
                aproximateHeight={510} >
                <MainPost
                    firstMessage='محصولات کاربردی و متنوع'
                    secondMessage='داستان هندیمن از کجا شروع شد؟'
                    description={`فروشگاه هندیمن با داشتن بیشترین متقاضی از سراسر کشور برای خرید قطعات دستگاه ، شوینده مناسب ، کیسه ی جاروبرقی ، و خرید انواع لوازم جانبی ، در خدمت شما مشتریان گرامی می‌باشد.
فروشگاه آنلاین مجموعه ما بر پایه اعتماد شما بنا گشت و همواره برآن است تا این مسیر را در جهت کسب رضایت دائمی مشتریان پیش برده و با کیفیت و خدمات رسانی هرچه تمام تر ، لذت یک خرید آنلاین با آسودگی خاطر را به شما هدیه دهد.`}
                    secondaryBtnMessage='مشاهده محصولات'
                    secondaryBtnPath='/shop'
                >
                    <img loading='' src={shopBag} alt="shop" />
                </MainPost>
            </AddAnimationTo>
        </div>
        <div className="post-section section-3" >
            <AddAnimationTo
                animationName="emergeFromRight"
                aproximateHeight={510}
            >
                <ImageWobbler loading='' src={shopPic} alt="از فروشگاه ما دیدن کنید" />
            </AddAnimationTo>
            <AddAnimationTo
                animationName="emergeFromLeft"
                aproximateHeight={510} >
                <MainPost
                    firstMessage='محصولات کاربردی و متنوع'
                    secondMessage='داستان هندیمن از کجا شروع شد؟'
                    description={`فروشگاه هندیمن با داشتن بیشترین متقاضی از سراسر کشور برای خرید قطعات دستگاه ، شوینده مناسب ، کیسه ی جاروبرقی ، و خرید انواع لوازم جانبی ، در خدمت شما مشتریان گرامی می‌باشد.
فروشگاه آنلاین مجموعه ما بر پایه اعتماد شما بنا گشت و همواره برآن است تا این مسیر را در جهت کسب رضایت دائمی مشتریان پیش برده و با کیفیت و خدمات رسانی هرچه تمام تر ، لذت یک خرید آنلاین با آسودگی خاطر را به شما هدیه دهد.`}
                    secondaryBtnMessage='مشاهده محصولات'
                    secondaryBtnPath='/shop'
                >
                    <img loading='' src={shopBag} alt="shop" />
                </MainPost>
            </AddAnimationTo>
        </div>
        </div>
    )
}


export default ShoppingCart;