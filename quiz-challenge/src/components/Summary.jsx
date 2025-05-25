import {useContext} from "react";
import {QuizContext} from "../store/quiz-context.jsx";

export default function Summary(){
    const {answersStored, restart} = useContext(QuizContext);
    return <section id='quiz'>
        <h1>Question overview</h1>
        <ul>

            {answersStored.map(answer =>
                <li key={answer.question.id}>
                    <h1>{answer.question.text}</h1>
                    {answer.answer}
                </li>)}
        </ul>
        <button onClick={restart}>Restart</button>
    </section>

}