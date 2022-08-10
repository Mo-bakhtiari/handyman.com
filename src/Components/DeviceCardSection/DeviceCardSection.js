import { DeviceCard } from './DeviceCard';
import jaroo from '../../assets/jaroo.png';
import lebasshooyi from '../../assets/lebasshooyi.png';
import spilet from '../../assets/spilet.png';
import dishwasher from '../../assets/dishwasher.png';
import sideBySide from '../../assets/side-by-side.png';
import tv from '../../assets/tv.png';
import yakhchal from '../../assets/yakhchal.png';
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


// return (
//     <div className="device-card-section" >
//         <DeviceCard
//             name="جاروبرقی"
//             cardSrc={jaroo}
//             cardAlt="جاروبرقی"
//             cardPath="/repair/vacuum-cleaner"
//         />
//         <DeviceCard
//             name="ماشین لباسشویی"
//             cardSrc={lebasshooyi}
//             cardAlt="ماشین لباسشویی"
//             cardPath="/repair/washing-machine"
//         />
//         <DeviceCard
//             name="کولرگازی و اسپیلت"
//             cardSrc={spilet}
//             cardAlt="کولرگازی و اسپیلت"
//             cardPath="/repair/spilet"
//         />
//         <DeviceCard
//             name="ماشین ظرفشویی"
//             cardSrc={dishwasher}
//             cardAlt="ماشین ظرفشویی"
//             cardPath="/repair/dishwasher"
//         />
//         <DeviceCard
//             name="ساید بای ساید"
//             cardSrc={sideBySide}
//             cardAlt="ساید بای ساید"
//             cardPath="/repair/side-by-side"
//         />
//         <DeviceCard
//             name="تلویزیون"
//             cardSrc={tv}
//             cardAlt="تلویزیون"
//             cardPath="/repair/tv"
//         />
//         <DeviceCard
//             name="یخچال فیریزر"
//             cardSrc={yakhchal}
//             cardAlt="یخچال فیریزر"
//             cardPath="/repair/refrigerator-and-freezer"
//         />
//     </div>
// )