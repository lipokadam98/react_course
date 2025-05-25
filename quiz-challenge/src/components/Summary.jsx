import {useContext} from "react";
import quizComplete from '../assets/quiz-complete.png'
import {QuizContext} from "../store/quiz-context.jsx";
import SummaryStats from "./SummaryStats.jsx";

export default function Summary(){
    const {answersStored, restart} = useContext(QuizContext);
    return <section id='summary'>
        <img src={quizComplete} alt='Quiz Complete'/>
        <h2>QUIZ COMPLETED!</h2>
            <SummaryStats />
        <ol>
            {answersStored.map(answer =>
                <li key={answer.question.id}>
                    <h3>{answer.index}</h3>
                    <p className='question'>
                        {answer.question.text}
                    </p>
                    <p className={answer.wasCorrect ? 'user-answer correct' : 'user-answer wrong'}>
                        {answer.answer}
                    </p>
                </li>)}
        </ol>
        <div className='answer'>
            <button onClick={restart}>Restart</button>
        </div>

    </section>

}