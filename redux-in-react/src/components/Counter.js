import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../store/counter";

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.counter);
    const toggleCounter = useSelector(state => state.counter.toggleCounter);

    const incrementHandler = () => {
        dispatch(counterActions.increment());
    };

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    };

    const addFiveHandler = () => {
        dispatch(counterActions.increase({amount: 5}));
    }

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter());
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