import Link from "next/link";

export default function Home() {
  return (
    <main style={{ color: 'white', textAlign: 'center' }}>
      <h1>
        Time to get started!
      </h1>
        <p>
            <Link href='meals'>Meals</Link>
        </p>
        <p>
            <Link href='meals/share'>Meal share</Link>
        </p>
        <p>
            <Link href='community'>Meal share</Link>
        </p>
    </main>
  );
}
