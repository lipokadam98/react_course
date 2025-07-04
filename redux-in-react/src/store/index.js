import {createStore} from "redux";

const initialState = { counter: 0, toggleCounter: false }

const counterReducer = (state = initialState , action) =>{
    if(action.type === "INCREMENT"){
        return {
            ...state,
            counter: state.counter + 1
        }
    }

    if(action.type === "DECREMENT"){
        return {
            ...state,
            counter: state.counter - 1
        }
    }

    if(action.type === "INCREMENT_BY_AMOUNT"){
        return {
            ...state,
            counter: state.counter + action.amount
        }
    }

    if(action.type === "TOGGLE_COUNTER"){
        return {
            ...state,
            toggleCounter: !state.toggleCounter
        }
    }

    return state;
}

const store = createStore(counterReducer);

export default store;