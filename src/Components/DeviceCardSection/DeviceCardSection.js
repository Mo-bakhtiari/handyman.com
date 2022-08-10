import { DeviceCard } from './DeviceCard';
import jaroo from '../../assets/jaroo.webp';
import lebasshooyi from '../../assets/lebasshooyi.webp';
import spilet from '../../assets/spilet.webp';
import dishwasher from '../../assets/dishwasher.webp';
import sideBySide from '../../assets/side-by-side.webp';
import tv from '../../assets/tv.webp';
import yakhchal from '../../assets/yakhchal.webp';
import Carousel, { CarouselItem } from '../Carousel';



export function DeviceCardSection() {

    return (
        <div className="device-card-section" >
            <Carousel >
                <CarouselItem >
                    <DeviceCard
                        name="جاروبرقی"
                        cardSrc={jaroo}
                        cardAlt="جاروبرقی"
                        cardPath="/repair/vacuum-cleaner"
                    />
                </CarouselItem>
                <CarouselItem >
                    <DeviceCard
                        name="ماشین لباسشویی"
                        cardSrc={lebasshooyi}
                        cardAlt="ماشین لباسشویی"
                        cardPath="/repair/washing-machine"
                    />
                </CarouselItem>
                <CarouselItem >
                    <DeviceCard
                        name="کولرگازی و اسپیلت"
                        cardSrc={spilet}
                        cardAlt="کولرگازی و اسپیلت"
                        cardPath="/repair/spilet"
                    />
                </CarouselItem>
                <CarouselItem >
                    <DeviceCard
                        name="ماشین ظرفشویی"
                        cardSrc={dishwasher}
                        cardAlt="ماشین ظرفشویی"
                        cardPath="/repair/dishwasher"
                    />
                </CarouselItem>
                <CarouselItem >
                    <DeviceCard
                        name="ساید بای ساید"
                        cardSrc={sideBySide}
                        cardAlt="ساید بای ساید"
                        cardPath="/repair/side-by-side"
                    />
                </CarouselItem>
                <CarouselItem >
                    <DeviceCard
                        name="تلویزیون"
                        cardSrc={tv}
                        cardAlt="تلویزیون"
                        cardPath="/repair/tv"
                    />
                </CarouselItem>
                <CarouselItem >
                    <DeviceCard
                        name="یخچال فیریزر"
                        cardSrc={yakhchal}
                        cardAlt="یخچال فیریزر"
                        cardPath="/repair/refrigerator-and-freezer"
                    />
                </CarouselItem>
            </Carousel>
        </div>
    )
}