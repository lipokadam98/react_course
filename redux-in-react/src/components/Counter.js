import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
    const toggleCounter = useSelector(state => state.toggleCounter);

    const incrementHandler = () => {
        dispatch({type: 'INCREMENT'});
    };

    const decrementHandler = () => {
        dispatch({type: 'DECREMENT'});
    };

    const addFiveHandler = () => {
        dispatch({type: 'INCREMENT_BY_AMOUNT', amount: 5});
    }

    const toggleCounterHandler = () => {
        dispatch({type: 'TOGGLE_COUNTER'});
    };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
        {toggleCounter && <div className={classes.value}>{counter}</div>}
        <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={addFiveHandler}>Increase by 5</button>
            <button onClick={decrementHandler}>Decrement</button>
        </div>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
