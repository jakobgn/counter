import { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="Counter">
      <h1>{counter}</h1>
      <button onClick={()=> setCounter(counter + 1)}>+1</button>
      <button onClick={()=> setCounter(counter - 1)}>-1</button>
    </div>
  );
}

export default Counter;
