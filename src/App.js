import Header from './Components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import ShoppingCart from './Pages/ShoppingCart';
import Services from './Pages/Services';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Instructions from './Pages/Instructions';
import AboutUs from './Pages/AboutUs';



function App() {
    return (
        <BrowserRouter>
                <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/shopping-cart' element={<ShoppingCart />} />
                <Route path='/services' element={<Services />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/instructions' element={<Instructions />} />
                <Route path='/about-us' element={<AboutUs />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;