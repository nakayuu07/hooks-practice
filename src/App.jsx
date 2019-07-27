import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const increment2 = () => setCount(prevCount => prevCount + 1)
  const decrement2 = () => setCount(prevCount => prevCount - 1)
  const reset = () => setCount(0)
  const double = () => setCount(count * 2)
  const divide3 = () => setCount(prevCount => {
     return prevCount % 3 === 0 ? prevCount / 3 : prevCount
  })
  
  
  return (
    <>
      <p>count: {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={increment2}>+1</button>
      <button onClick={decrement2}>-1</button>
      <button onClick={reset}>reset</button>
      <button onClick={double}>✖️2</button>
      <button onClick={divide3}>3の倍数時のみ3で割る</button>
    </>
  )
}

export default App