import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = props => {
  const [state, setState] = useState(props)  
  const {name, price} = state

  return (
    <div className="container-fluid">
      <p>現在の{name}は、{price}です</p>
      <button onClick={() => setState({...state, price: price - 100 })}>- 100</button>
      <button onClick={() => setState({...state, price: price + 100})}>+ 100</button>
      <button onClick={() => setState(props)}>reset</button>
      <input value={name} onChange={(e) => setState({...state, name: e.target.value})}/>
    </div>
  )
}

App.defaultProps = {
  name: '',
  price: 1000
}

export default App