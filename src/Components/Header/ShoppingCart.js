import { PrimaryButton } from '../buttons';
import {BsCart3} from 'react-icons/bs';


export function ShoppingCart(props) {

    return (
        <PrimaryButton>
            <BsCart3 className="shopping-cart-icon"/>
            <span className="cart-counter" >0</span>
        </PrimaryButton>
    )
}