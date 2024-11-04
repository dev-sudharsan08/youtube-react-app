import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
  it('has counter with initial value0', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counterValue');
    expect(counterValue.textContent).toEqual('0');
  });

  it('has properly working decrement button', () => {
    render(<Counter />);
    // fetching counter element
    const counterValue = screen.getByTestId('counterValue');
    expect(counterValue.textContent).toEqual('0');

    // find the increment btn
    const incrementBtn = screen.getByTestId('incrementBtn');

    // trigger the click event on incrementBtn
    fireEvent.click(incrementBtn);
    // fetch the counter value again
    expect(counterValue.textContent).toEqual('1');
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    expect(counterValue.textContent).toEqual('4');
  });

  it('has properly working decrement button', () => {
    render(<Counter />);
    // fetching counter element
    const counterValue = screen.getByTestId('counterValue');
    expect(counterValue.textContent).toEqual('0');

    // find the decrement btn
    const decrementBtn = screen.getByTestId('decrementBtn');

    // trigger the click event on decrementBtn
    fireEvent.click(decrementBtn);
    // fetch the counter value again
    expect(counterValue.textContent).toEqual('0');
    fireEvent.click(decrementBtn);
    fireEvent.click(decrementBtn);
    fireEvent.click(decrementBtn);
    expect(counterValue.textContent).toEqual('0');
  });

  it('has counter with max value of 10 upon increment', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counterValue');
    const incrementBtn = screen.getByTestId('incrementBtn');

    for (let i = 0; i < 10; i++) {
      fireEvent.click(incrementBtn);
    }

    // fireEvent.click(incrementBtn);
    // // fetch the counter value again
    // expect(counterValue.textContent).toEqual('1');
    // fireEvent.click(incrementBtn);
    // fireEvent.click(incrementBtn);
    // fireEvent.click(incrementBtn);
    // fireEvent.click(incrementBtn);
    // fireEvent.click(incrementBtn);
    // fireEvent.click(incrementBtn);
    // fireEvent.click(incrementBtn);
    // fireEvent.click(incrementBtn);
    // fireEvent.click(incrementBtn);
    expect(counterValue.textContent).toEqual('10');
  });

  it('has counter with max value of 0 upon increment', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counterValue');
    const incrementBtn = screen.getByTestId('incrementBtn');
    const decrementBtn = screen.getByTestId('decrementBtn');

    // trigger the click event on decrementBtn
    expect(counterValue.textContent).toEqual('0');

    for (let i = 0; i < 10; i++) {
      fireEvent.click(incrementBtn);
    }
    expect(counterValue.textContent).toEqual('10');

    for (let i = 0; i < 10; i++) {
      fireEvent.click(decrementBtn);
    }

    // decrementing 11th time
    fireEvent.click(decrementBtn);

    // fireEvent.click(decrementBtn);
    // // fetch the counter value again
    // expect(counterValue.textContent).toEqual('-1');
    // fireEvent.click(decrementBtn);
    // fireEvent.click(decrementBtn);
    // fireEvent.click(decrementBtn);
    // fireEvent.click(decrementBtn);
    // fireEvent.click(decrementBtn);
    // fireEvent.click(decrementBtn);
    // fireEvent.click(decrementBtn);
    // fireEvent.click(decrementBtn);
    // fireEvent.click(decrementBtn);
    expect(counterValue.textContent).toEqual('0');
  });
});
