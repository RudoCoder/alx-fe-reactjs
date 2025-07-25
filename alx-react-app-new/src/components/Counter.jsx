import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h2>React Counter</h2>
      <p style={{ fontSize: '24px' }}>Current Count: {count}</p>
      <div>
        <button onClick={() => setCount(count + 1)} style={{ margin: '5px' }}>Increment</button>
        <button onClick={() => setCount(count - 1)} style={{ margin: '5px' }}>Decrement</button>
        <button onClick={() => setCount(0)} style={{ margin: '5px' }}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
