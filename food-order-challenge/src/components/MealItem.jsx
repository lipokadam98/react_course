import {USDollar} from "../util/format-currency.js";

export default function MealItem({meal}) {
    return <section className="meal-item">
        <img src={'http://localhost:3000/'+meal.image} alt="logo"/>
        <h3>{meal.name}</h3>
        <p className="meal-item-price">
            {USDollar.format(meal.price)}
        </p>

        <article className="meal-item-description">
            {meal.description}
        </article>

        <div className="meal-item-actions">
            <button className="button">Add to cart</button>
        </div>
    </section>
}