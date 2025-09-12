import Link from "next/link";

export default function MealsPage() {
    return <section>
        <h1>Meals works</h1>
        <ul>
            <li>
                <Link href="meals/1">Meal 1</Link>
            </li>
            <li>
                <Link href="meals/2">Meal 2</Link>
            </li>
            <li>
                <Link href="meals/2">Meal 3</Link>
            </li>
        </ul>
    </section>
}