import React from 'react';
import Header from './Components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ServiceAdvanteges from './Components/ServiceAdvanteges';
import Footer from './Components/Footer';
const LoginPromise = import('./Pages/Login');
const Login = React.lazy(() => LoginPromise);
const ServicesPromise = import('./Pages/Services');
const Services = React.lazy(() => ServicesPromise);
const ShoppingCartPromise = import('./Pages/ShoppingCart');
const ShoppingCart = React.lazy(() => ShoppingCartPromise );
const ShopPromise = import('./Pages/Shop');
const Shop = React.lazy(() => ShopPromise );
const InstructionsPromise = import('./Pages/Instructions');
const Instructions = React.lazy(() => InstructionsPromise );
const AboutUs = React.lazy(() => import('./Pages/AboutUs'));
const VacuumCleanerPromise = import('./Pages/VacuumCleaner');
const VacuumCleaner = React.lazy(() => VacuumCleanerPromise );
const WashingMashinePromise = import('./Pages/WashingMashine');
const WashingMashine = React.lazy(() => WashingMashinePromise );
const SpiletPromise = import('./Pages/Spilet');
const Spilet = React.lazy(() => SpiletPromise );
const DishwasherPromise = import('./Pages/Dishwasher');
const Dishwasher = React.lazy(() => DishwasherPromise );
const SideBySidePromise = import('./Pages/SideBySide');
const SideBySide = React.lazy(() => SideBySidePromise );
const TvPromise = import('./Pages/Tv');
const Tv = React.lazy(() => TvPromise );
const RefrigeratorPromise = import('./Pages/Refrigerator');
const Refrigerator = React.lazy(() => RefrigeratorPromise );


function App() {
    return (
        <BrowserRouter>
            <Header />
            <div id="main">
                <React.Suspense fallback={null} >
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/shopping-cart' element={<ShoppingCart />} />
                        <Route path='/services' element={<Services />} />
                        <Route path='/shop' element={<Shop />} />
                        <Route path='/instructions' element={<Instructions />} />
                        <Route path='/about-us' element={<AboutUs />} />
                        <Route path='/repair/vacuum-cleaner' element={<VacuumCleaner />} />
                        <Route path='/repair/washing-machine' element={<WashingMashine />} />
                        <Route path='/repair/spilet' element={<Spilet />} />
                        <Route path='/repair/dishwasher' element={<Dishwasher />} />
                        <Route path='/repair/side-by-side' element={<SideBySide />} />
                        <Route path='/repair/tv' element={<Tv />} />
                        <Route path='/repair/refrigerator-and-freezer' element={<Refrigerator />} />
                    </Routes>
                </React.Suspense>
            </div>
            <ServiceAdvanteges />
            <Footer />
        </BrowserRouter>
    )
}

export default App;