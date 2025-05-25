import {useContext} from "react";
import {QuizContext} from "../store/quiz-context.jsx";

export default function SummaryStats(){
    const {stats} = useContext(QuizContext);

    return <div id='summary-stats'>
        <p>
            <span className='number'>{stats.skipped}%</span>
            <span className='text'>Skipped</span>
        </p>
        <p>
            <span className='number'>{stats.correct}%</span>
            <span className='text'>Answered correctly</span>
        </p>
        <p>
            <span className='number'>{stats.incorrect}%</span>
            <span className='text'>Answered incorrectly</span>
        </p>

    </div>
}