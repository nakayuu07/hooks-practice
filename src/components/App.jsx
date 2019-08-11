import React, { useEffect, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Events from './Events'
import OperationLogs from './OperationLogs.jsx'
import EventForm from './EventForm'
import reducer from '../reducers/'
import AppContext from '../contexts/AppContext'

const APP_KEY = 'appWithRedux'

const App = () => {
  const appState = localStorage.getItem(APP_KEY)
  const initialState = JSON.parse(appState) || { events: [], operationLogs: [] }
  const [state, dispatch] = useReducer(reducer, initialState)
  
  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state))
  }, [state]) 

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