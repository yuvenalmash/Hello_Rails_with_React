import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateMessage } from '../redux/greetingSlice';

const Greeting = () => {
  const message = useSelector((state) => state.greeting.message);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => dispatch(updateMessage('Hello from Redux!'))}>
        Click me!
      </button>
    </div>
  )
}

export default Greeting;
