export default async function MealDetailPage({ params }) {
    const param = await params;
    return <>
        <h1>MealDetailPage works</h1>
        <p>{param.mealSlug}</p>
    </>
}