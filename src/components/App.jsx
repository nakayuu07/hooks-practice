import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Events from './Events'
import EventForm from './EventForm'
import reducer from '../reducers/'
import AppContext from '../contexts/AppContext'

const App = () => {
  const initialState = {
    events: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <>
        <EventForm/>
        <Events/>
      </>
    </AppContext.Provider>
  )
}


export default App