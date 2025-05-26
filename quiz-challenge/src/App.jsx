import Header from "./components/Header.jsx";
import QuizContextProvider from "./store/quiz-context.jsx";
import SummaryQuestionSwitcher from "./components/SummaryQuestionSwitcher.jsx";

function App() {
    return  <QuizContextProvider>
                <Header/>
                <SummaryQuestionSwitcher/>
            </QuizContextProvider>
}

export default App;
