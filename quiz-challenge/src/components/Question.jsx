import {useContext, useEffect, useState} from "react";
import {QuizContext} from "../store/quiz-context.jsx";

const MAX_VALUE = 1000;
const TIMEOUT_VALUE = 10;

export default function Question(){

    const [progressValue, setProgressValue] = useState(MAX_VALUE);
    const {currentQuestion,showNextQuestion} = useContext(QuizContext);

    useEffect(()=> {
        if(progressValue <= 0){
            showNextQuestion({
                question: currentQuestion,
                answer: null,
                wasCorrect: false,
                wasSkipped: true
            })
        }
    },[progressValue,showNextQuestion])

    useEffect(()=>{
        setProgressValue(MAX_VALUE);

        const intervalId = setInterval(()=>{
            setProgressValue(prevValue => prevValue - 10);
        },TIMEOUT_VALUE)

        return () => {
            clearInterval(intervalId);
        }
    },[currentQuestion])

    function onAnswerSelected(answer){
        const wasCorrect = answer === currentQuestion.answers[0];

        showNextQuestion({
            question: currentQuestion,
            answer,
            wasCorrect
        })
    }

    return <div id='question'>
        <progress value={progressValue} max={MAX_VALUE}/>
        <h2>{currentQuestion.text}</h2>
        <section id='answers' className='answer'>
            {
                currentQuestion.answers.map(answer =>
                    <button key={answer} onClick={() => onAnswerSelected(answer)}>{answer}</button>)
            }
        </section>
    </div>;
}