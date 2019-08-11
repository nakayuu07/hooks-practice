import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Events from './Events'
import OperationLogs from './OperationLogs.jsx'
import EventForm from './EventForm'
import reducer from '../reducers/'
import AppContext from '../contexts/AppContext'

const App = () => {
  const initialState = {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <>
        <EventForm/>
        <Events/>
        <OperationLogs />
      </>
    </AppContext.Provider>
  )
}


export default App