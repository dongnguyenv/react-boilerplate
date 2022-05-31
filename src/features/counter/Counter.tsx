import { useState } from 'react';

const Counter = () => {
    // let counter = 0;
    const [counter, setCounter] = useState(0);
    const [incrementValue, setIncrementValue] = useState(0);

    const handlerIncrement = () => {
        setCounter(counter + 1);
    };

    const handlerDecrement = () => {
        setCounter(counter - 1);
    };

    const handleInputValueChanged = ($event: any) => {
        const value = isNaN($event.target.valueAsNumber) ? 0 : $event.target.valueAsNumber;
        setIncrementValue(value);
    };

    const handleIncrementValue = () => {
        setCounter(counter + incrementValue);
    };

    return (
        <div>
            <p>value: {counter}</p>
            <button onClick={handlerIncrement}>Increment</button>
            <button onClick={handlerDecrement}>Decrement</button>
            <br />
            <input type="number" value={incrementValue} onChange={handleInputValueChanged} />
            <button onClick={handleIncrementValue}>Increment number</button>
        </div>
    );
};

export default Counter;
