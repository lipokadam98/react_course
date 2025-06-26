import {USDollar} from "../util/format-currency.js";

export default function CartItem({id}) {

    //TODO Get cart item from context and edit it here

    return <section className="cart-item">
        <p>Placeholder - 1 x {USDollar.format(19.99)}</p>
        <div className="cart-item-actions">
            <button className="button">+</button>
            <span>1</span>
            <button className="button">-</button>
        </div>
    </section>
}