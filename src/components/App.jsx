import React, { useReducer } from 'react';
import Events from './Events'
import EventForm from './EventForm'
import reducer from '../reducers/'

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <>
      <EventForm events={state} dispatch={dispatch} />
      <Events events={state} dispatch={dispatch} />
    </>
  )
}


export default App