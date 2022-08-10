import Carousel, {CarouselItem} from "./Carousel";
import {Link} from "react-router-dom";
import aeg from '../assets/aeg.webp';
import Ariston from '../assets/Ariston.webp';
import Bosch from '../assets/Bosch.webp';
import Daewoo from '../assets/Daewoo.webp';
import generalElectric from '../assets/General-electric.webp';
import Indesit from '../assets/Indesit.webp';
import LG from '../assets/LG.webp';
import Samsung from '../assets/Samsung.webp';


function BrandNamesSection() {

    return(
        <div className="brand-names-section" >
        <Carousel 
            NOActiveItems={5}
            decrementOffset={0}
            stepLength={1} 
        >
            <CarouselItem >
                <Link to="/brands/aeg" >
                    <img loading='lazy' src={aeg} alt="برند آلگ" />
                </Link>
            </CarouselItem>
            <CarouselItem >
                <Link to="/brands/Ariston" >
                    <img loading='lazy' src={Ariston} alt="برند آلگ" />
                </Link>
            </CarouselItem>
            <CarouselItem >
                <Link to="/brands/Bosch" >
                    <img loading='lazy' src={Bosch} alt="برند آلگ" />
                </Link>
            </CarouselItem>
            <CarouselItem >
                <Link to="/brands/Daewoo" >
                    <img loading='lazy' src={Daewoo} alt="برند آلگ" />
                </Link>
            </CarouselItem>
            <CarouselItem >
                <Link to="/brands/General-electric" >
                    <img loading='lazy' src={generalElectric} alt="برند آلگ" />
                </Link>
            </CarouselItem>
            <CarouselItem >
                <Link to="/brands/Indesit" >
                    <img loading='lazy' src={Indesit} alt="برند آلگ" />
                </Link>
            </CarouselItem>
            <CarouselItem >
                <Link to="/brands/LG" >
                    <img loading='lazy' src={LG} alt="برند آلگ" />
                </Link>
            </CarouselItem>
            <CarouselItem >
                <Link to="/brands/Samsung" >
                    <img loading='lazy' src={Samsung} alt="برند آلگ" />
                </Link>
            </CarouselItem>
        </Carousel>
        </div> 
    )
}

export default BrandNamesSection;