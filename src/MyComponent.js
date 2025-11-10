import React, { useState, useMemo } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  // An expensive calculation that only re-runs when 'count' changes
  const expensiveCalculation = useMemo(() => {
    console.log('Performing expensive calculation...');
    let result = 0;
    for (let i = 0; i < count * count; i++) {
      result += i;
    }
    return result;
  }, [count]); // Dependency array: the calculation re-runs only if 'count' changes

  return (
    <div>
      
      <div align="center">
        <h1>Hi, useMemo!</h1>
      </div>
      <center>
        <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <p>Input Value: {inputValue}</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <p>Expensive Calculation Result: {expensiveCalculation}</p>
     </center>
    </div>
  );
}

export default MyComponent;