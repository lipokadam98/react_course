import Header from "./components/Header.jsx";
import QuizContextProvider from "./store/quiz-context.jsx";
import SummaryGameSwitcher from "./components/SummaryGameSwitcher.jsx";

function App() {
    return  <QuizContextProvider>
                <Header/>
                <SummaryGameSwitcher/>
            </QuizContextProvider>
}

export default App;
