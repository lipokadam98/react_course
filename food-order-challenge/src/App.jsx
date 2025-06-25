import Header from "./components/Header.jsx";
import {useEffect} from "react";

function App() {
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:3000/meals');
            if(!response.ok){
                console.log('error during meals fetch');
            }

            const data = await response.json();
            console.log(data);
        }

        fetchData();

    }, []);

  return (
    <>
      <Header />
        <section id="meals">

        </section>
    </>
  );
}

export default App;
