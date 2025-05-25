import {createContext, useReducer} from 'react';
import questions from "../questions.js";

export const QuizContext = createContext({
    currentQuestion: questions[0],
    questionIndex: 0,
    answersStored: [],
    showNextQuestion: (answer) => {},
    restart: () => {}

});

function quizReducer(state, action) {
    if(action.type === 'SHOW_NEXT'){
        const nextIndex = state.questionIndex + 1;
        return {
            ...state,
            answersStored: [...state.answersStored, action.payload],
            questionIndex: nextIndex,
            currentQuestion: nextIndex === questions.length ? undefined : questions[nextIndex]
        }
    }

    if(action.type === 'RESTART'){
        return {
            ...state,
            currentQuestion: questions[0],
            questionIndex: 0,
            answersStored: [],
        };
    }

    return state;
}

export default function QuizContextProvider({ children }){

    const [quizState, quizDispatch] = useReducer(quizReducer,
        {
            currentQuestion: questions[0],
            questionIndex: 0,
            answersStored: [],
        }
    );

    function handleShowNextQuestion(answer) {
        console.log(answer);
        quizDispatch({
            type: 'SHOW_NEXT',
            payload: answer
        });
    }

    function handleRestart() {
        quizDispatch({
            type: 'RESTART',
        })
    }

    const ctxValue = {
        currentQuestion: quizState.currentQuestion,
        questionIndex: quizState.questionIndex,
        answersStored: quizState.answersStored,
        showNextQuestion: handleShowNextQuestion,
        restart: handleRestart
    }

    return <QuizContext.Provider value={ctxValue}>
        {children}
    </QuizContext.Provider>
}