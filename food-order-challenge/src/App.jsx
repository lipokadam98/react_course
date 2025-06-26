import Header from "./components/Header.jsx";
import {useEffect, useState} from "react";
import MealItem from "./components/MealItem.jsx";

function App() {
    const [mealItems, setMealItems] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:3000/meals');
            if(!response.ok){
                console.log('error during meals fetch');
            }

            const data = await response.json();
            console.log(data);
            setMealItems(data);
        }

        fetchData();

    }, []);

  return (
    <>
      <Header />
        <section id="meals">
            { mealItems.map(meal => <MealItem key={meal.id} meal={meal} />) }
        </section>
    </>
  );
}

export default App;
