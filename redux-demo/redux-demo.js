const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {

    if(action.type === 'INCREMENT'){
        return {
            ...state,
            counter: state.counter + 1
        }
    }

    if(action.type === 'DECREMENT'){
        return {
            ...state,
            counter: state.counter -1
        }
    }

    return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}

store.subscribe(counterSubscriber);

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });