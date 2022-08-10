import PostSection1 from '../Components/PostSection1';
import PostSection2 from '../Components/PostSection2';
import PostSection3 from '../Components/PostSection3';
import PostSection4 from '../Components/PostSection4';
import { DeviceCardSection } from '../Components/DeviceCardSection/DeviceCardSection';
import AddAnimationTo from '../Components/AddAnimationTo';
import BrandNamesSection from '../Components/BrandNamesSection';
import RequestStepSection from '../Components/RequestSteps/RequestStepSection';
import AdvertisingPics from '../Components/AdvertisingPics';
import MagazineCardSection from '../Components/MagazineCard/MagazineCardSection';


export default function Home() {
    return (
        <>
            <PostSection1 />
            <AddAnimationTo
                animationName="emergeFromBottom"
            >
                <DeviceCardSection />
            </AddAnimationTo>
            <AddAnimationTo
                animationName="emergeFromBottom"
            >
                <BrandNamesSection />
            </AddAnimationTo>
            <PostSection2 />
            <AddAnimationTo
                animationName="emergeFromBottom"
            >
                <RequestStepSection />
            </AddAnimationTo>
            <AdvertisingPics />
            <PostSection3 />
            <AddAnimationTo
                animationName="emergeFromBottom"
            >
                <MagazineCardSection />
            </AddAnimationTo>
            <PostSection4 />
        </>
    )
}