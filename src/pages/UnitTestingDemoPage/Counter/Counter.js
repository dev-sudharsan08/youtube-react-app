import React, { useState } from 'react';

const Counter = () => {
  const [ticker, setTicker] = useState(0);
  console.log(setTicker);

  const handleIncrement = () => {
    if (ticker < 10) {
      setTicker(ticker + 1);
    }
  };

  const handleDecrement = () => {
    if (ticker > 0) {
      setTicker(ticker - 1);
    }
  };

  return (
    <div>
      <h2>Counter | Testing Click and State Update with Conditionals</h2>
      <p data-testid='counterValue'>{ticker}</p>
      <button
        type='button'
        className='btn btn-success'
        onClick={handleIncrement}
        data-testid='incrementBtn'>
        Increment
      </button>
      <button
        type='button'
        onClick={handleDecrement}
        data-testid='decrementBtn'
        className='btn btn-danger'>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
