import MagazineCard from './MagazineCard';
import Carousel, { CarouselItem } from '../Carousel';
import cooler from '../../assets/magazine-cooler.webp';
import vacuumCleaner from '../../assets/magazine-vacuum.webp';
import washingMashine from '../../assets/magazine-washing-machine.webp';
import { PrimaryButton } from '../buttons';
import { Link } from 'react-router-dom';


function MagazineCardSection() {

    return (
        <div className="magazine-card-section">
            <h2>مجله لوازم خانگی</h2>
            <Carousel
                stepLength={1}
                decrementRatio={1 / 2}
                decrementOffset={0}
            >
                <CarouselItem >
                    <MagazineCard
                        cardPath="/fix-vacuum-cord-rewind"
                        imageSrc={vacuumCleaner}
                        readingDuration="7 دقیقه"
                        imageAlt="تعمیر سیم کش جاروبرقی"
                        topic="آموزش گام به گام نحوه تعمیر سیم جمع کن جاروبرقی"
                        cutDownDescription="خراب شدن قطعه سیم جمع کن جاروبرقی، یکی از رایج‌ترین مشکلات دستگاه بوده که بی‌توجهی‌ به آن می‌تواند"
                    />
                </CarouselItem>
                <CarouselItem >
                    <MagazineCard
                        cardPath="/evaporative-cooling-vs-air-conditioning"
                        imageSrc={cooler}
                        readingDuration="6 دقیقه"
                        imageAlt="مقایسه کولر آبی و گازی + مزایا و معایب"
                        topic="مقایسه کولر آبی و گازی + مزایا و معایب"
                        cutDownDescription="زمانی که گرمای فصل تابستان از راه می‌رسد، هیچ چیزی به اندازه باد خنک کولر نمی‌تواند لذت بخش باشد. در حال حاضر"
                    />
                </CarouselItem>
                <CarouselItem >
                    <MagazineCard
                        cardPath="/washing-blanket-using-machine"
                        imageSrc={washingMashine}
                        readingDuration="4 دقیقه"
                        imageAlt="آشنایی با نحوه شستشوی پتو با ماشین لباسشویی"
                        topic="آشنایی با نحوه شستشوی پتو با ماشین لباسشویی"
                        cutDownDescription="آیا می‌دانستید لباسشویی‌های جدید، برنامه خاصی برای شست‌وشوی پتو دارند؟ بسیاری از افراد به غلط تصور می‌کنند که"
                    />
                </CarouselItem>
            </Carousel>
            <Link to='/blog' >
                <PrimaryButton >آرشیو اخبار</PrimaryButton>
            </Link>
        </div>
    )
}


export default MagazineCardSection;