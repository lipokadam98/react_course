import {createContext, useCallback, useReducer} from 'react';
import questions from "../questions.js";

export const QuizContext = createContext({
    currentQuestion: questions[0],
    questionIndex: 0,
    answersStored: [],
    stats: {
        skipped: 0,
        correct: 0,
        incorrect: 0
    },
    showNextQuestion: (answer) => {},
    restart: () => {}
});

function quizReducer(state, action) {
    if(action.type === 'SHOW_NEXT'){

        let correct = state.stats.correct;
        let incorrect = state.stats.incorrect;
        let skipped = state.stats.skipped;

        if(action.payload.wasCorrect){
             correct = correct + 1;
        }else{
            if(action.payload.wasSkipped){
                skipped = skipped + 1;
            }else{
                incorrect = incorrect + 1;
            }
        }

        const nextIndex = state.questionIndex + 1;
        const storedAnswer = {
            ...action.payload,
            index: nextIndex
        }
        return {
            ...state,
            answersStored: [...state.answersStored, storedAnswer],
            questionIndex: nextIndex,
            currentQuestion: nextIndex === questions.length ? undefined : questions[nextIndex],
            stats: {
                correct,
                incorrect,
                skipped
            }
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
            stats: {
                skipped: 0,
                correct: 0,
                incorrect: 0
            },
        }
    );

    const handleShowNextQuestion = useCallback(function handleShowNextQuestion(answer) {
        quizDispatch({
            type: 'SHOW_NEXT',
            payload: answer
        });
    }, []);


    function handleRestart() {
        quizDispatch({
            type: 'RESTART',
        })
    }

    const ctxValue = {
        currentQuestion: quizState.currentQuestion,
        questionIndex: quizState.questionIndex,
        answersStored: quizState.answersStored,
        stats: quizState.stats,
        showNextQuestion: handleShowNextQuestion,
        restart: handleRestart
    }

    return <QuizContext.Provider value={ctxValue}>
        {children}
    </QuizContext.Provider>
}