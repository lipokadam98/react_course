import {useContext} from "react";
import {QuizContext} from "../store/quiz-context.jsx";

export default function Question(){

    const {currentQuestion,showNextQuestion} = useContext(QuizContext);

    function onAnswerSelected(answer){
        const wasAnswerCorrect = answer === currentQuestion.answers[0];

        if (!wasAnswerCorrect){
            //TODO interval handling on wrong answer
            return;
        }
        showNextQuestion({
            question: currentQuestion,
            answer,
            wasAnswerCorrect
        })
    }

    return <div id='question'>
                <progress/>
                <h2>{currentQuestion.text}</h2>
                <section id='answers' className='answer'>
                    {
                        currentQuestion.answers.map(answer =>
                        <button key={answer} onClick={() => onAnswerSelected(answer)}>{answer}</button>)
                    }
                </section>
           </div>;
}