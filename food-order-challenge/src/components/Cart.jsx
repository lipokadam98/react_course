import {useImperativeHandle, useRef} from "react";
import CartItem from "./CartItem.jsx";

export default function Cart({ref, checkoutClicked}) {

    //TODO Get cart items here and pass in an id to the CartItem component

    const cartRef = useRef(null);

    useImperativeHandle(ref, () => {
        return {
            open(){
                cartRef.current.showModal()
            },
            close(){
                cartRef.current.close();
            }
        }
    })

    function closeDialog(){
        cartRef.current.close();
    }

    return <dialog className="modal" ref={cartRef} onCancel={closeDialog}>
        <h2>Your Cart</h2>

        <CartItem/>

        <div className="modal-actions">
            <button className="text-button" onClick={closeDialog}>Close</button>
            <button className="button" onClick={checkoutClicked}>Go to Checkout</button>
        </div>
    </dialog>
}