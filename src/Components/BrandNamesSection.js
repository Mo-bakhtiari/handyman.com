import Carousel, {CarouselItem} from "./Carousel";
import {Link} from "react-router-dom";
import aeg from '../assets/aeg.png';
import Ariston from '../assets/Ariston.png';
import Bosch from '../assets/Bosch.png';
import Daewoo from '../assets/Daewoo.png';
import generalElectric from '../assets/General-electric.png';
import Indesit from '../assets/Indesit.png';
import LG from '../assets/LG.png';
import Samsung from '../assets/Samsung.png';


function BrandNamesSection() {

    return(
        <div className="brand-names-section" >
        <Carousel 
            NOActiveItems={5}
            decrementOffset={0} 
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