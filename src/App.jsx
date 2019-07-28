import React, { useEffect, useState } from 'react';

const App = props => {
  const [state, setState] = useState(props)  
  const {name, price} = state

  useEffect(() => {
    console.log('this is like componentDidMount or componentDidUpdate')
  }, )

  useEffect(() => {
    console.log('this is like componentDidMount')
  }, [])

  useEffect(() => {
    console.log('this callback is for name only')
  }, [name])

  return (
    <>
      <p>現在の{name}は、{price}です。</p>
      <button onClick={() => setState({...state, price: price - 100 })}>- 100</button>
      <button onClick={() => setState({...state, price: price + 100})}>+ 100</button>
      <button onClick={() => setState(props)}>reset</button>
      <input value={name} onChange={(e) => setState({...state, name: e.target.value})}/>
    </>
  )
}

App.defaultProps = {
  name: '',
  price: 1000
}

export default App