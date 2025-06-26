import {useImperativeHandle, useRef} from "react";
import {USDollar} from "../util/format-currency.js";

export default function Checkout({ref}) {

    //TODO Do validation on inputs and error handling after submit + show error or success dialog

    const dialogRef = useRef(null);

    useImperativeHandle(ref, () => {
        return {
            open(){
                dialogRef.current.showModal()
            }
        }
    })

    function closeDialog(){
        dialogRef.current.close();
    }

    return <dialog className="modal" ref={dialogRef} onCancel={closeDialog}>
        <h2>Checkout</h2>
        <p>Total Amount: {USDollar.format(89.95)}</p>

        <form className="control">
            <label htmlFor="name">Name</label>
            <input type="text" name="name"/>

            <label htmlFor="email">E-mail Address</label>
            <input type="text" name="email"/>

            <label htmlFor="street">Street</label>
            <input type="text" name="street"/>

            <div className="control-row">
                <div>
                    <label htmlFor="street">Postal Code</label>
                    <input type="text" name="postalcode"/>
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <input type="text" name="city"/>
                </div>
            </div>
            <div className="modal-actions">
                <button className="text-button" type="button" onClick={closeDialog}>Close</button>
                <button className="button">Submit Order</button>
            </div>
        </form>

    </dialog>
}