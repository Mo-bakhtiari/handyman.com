import { PrimaryButton } from '../buttons';


export function ShoppingCart(props) {

    return (
        <PrimaryButton>
            <i className="fa fa-shopping-cart"></i>
            <span className="cart-counter" >0</span>
        </PrimaryButton>
    )
}