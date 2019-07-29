import React, { useReducer } from 'react';
import Events from './Events'
import EventForm from './EventForm'
import reducer from '../reducers/'

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  const deleteEvent = id => {
    if (window.confirm(`イベント(id=${id})を削除していいですか？`)) {
      dispatch({
        type: 'DELETE_EVENT',
        id
      })
    }
  }

  return (
    <>
      <EventForm events={state} dispatch={dispatch} />
      <Events events={state} deleteEvent={deleteEvent} />
    </>
  )
}


export default App