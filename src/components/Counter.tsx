import { useState, useReducer, ChangeEvent } from "react";

const initState = { count: 0, text: "" };
const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string; //?=>INCREMENT and DECREMENT should not have payload
};

const reducer = (
  state: typeof initState,
  action: ReducerAction
): typeof initState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return { ...state, text: action.payload ?? "" };//nullish coalescing operator
    default:
      throw new Error();
  }
};

const Counter = () => {
  const [count, setCount] = useState<number>(1); //useState(1)
  const [state, dispatch] = useReducer(reducer, initState);
  const incrementReducer = () => {
    dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
  };

  const decrementReducer = () => {
    dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });
  };

  const handleInputText = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.NEW_INPUT,
      payload: e.target.value,
    });
  };

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const incrementThree = () => {
    setCount(count + 3);
  };
  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={incrementThree}>increment by three</button>
      <h1>Count by use reducer is {state.count}</h1>
      <button onClick={incrementReducer}>Increment</button>
      <button onClick={decrementReducer}>Decrement</button>
      <p>
        <input type="text" onChange={handleInputText} />
      </p>
      <h3>{state.text}</h3>
    </>
  );
};

export default Counter;
