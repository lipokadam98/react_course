import {useContext} from "react";
import {QuizContext} from "../store/quiz-context.jsx";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function SummaryQuestionSwitcher(){
    const {currentQuestion} = useContext(QuizContext);

    return currentQuestion ?
        <section id='quiz'>
            <Question></Question>
        </section> :
            <Summary/>;
}