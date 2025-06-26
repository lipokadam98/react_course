import {useRef} from "react";
import Cart from "./Cart.jsx";
import Checkout from "./Checkout.jsx";

export default function Header() {

    const cartRef = useRef(null);
    const checkoutRef = useRef(null);

    //TODO get value from context
    const numberOfItems = 3;

    function openCart() {
        console.log('Button clicked');
        cartRef.current.open();
    }

    function onCheckoutClicked(){
        cartRef.current.close();
        checkoutRef.current.open();
    }

    return <header id="main-header">
        <div id="title">
            <img src="logo.jpg" alt="logo"/>
            <h1>ReactFood</h1>
        </div>

        <button className="main-header-button" onClick={openCart}>
            Cart ({numberOfItems})
        </button>
        <Cart ref={cartRef} checkoutClicked={onCheckoutClicked}></Cart>
        <Checkout ref={checkoutRef}></Checkout>
    </header>
}