import Header from "./component/Header.jsx";
import Calculator from "./component/Calculator.jsx";
import {useState} from "react";
import Result from "./component/Result.jsx";
import {calculateInvestmentResults} from "./util/investment.js";

const DEFAULT_INPUT_VALUES = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
}

function App() {
    const [inputValues, setInputValues] = useState(DEFAULT_INPUT_VALUES);

    function onInputChanged(event){
        const id = event.target.id;
        const value = +event.target.value;
        setInputValues(prevState => {
            return {
                ...prevState,
                [id]: value,
            };
        })
    }
    const investmentResult = calculateInvestmentResults(inputValues);
    return (
      <main>
        <Header/>
        <Calculator inputChanged={onInputChanged}/>
        <Result investmentResult={investmentResult}/>
      </main>
  )
}

export default App
