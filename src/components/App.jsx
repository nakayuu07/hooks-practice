import React, { useReducer, useState } from 'react';
import Events from './Events'
import reducer from '../reducers/'

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = e => {
    e.preventDefault()
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
    })
    setTitle('')
    setBody('')
  }

  const deleteEvent = id => {
    if (window.confirm(`イベント(id=${id})を削除していいですか？`)) {
      dispatch({
        type: 'DELETE_EVENT',
        id
      })
    }
  }

  const deleteAllEvents = e => {
    e.preventDefault()
    if (window.confirm('イベントを全て削除していいですか？')) {
      dispatch({
        type: 'DELETE_ALL_EVENT',
      })
    }
  }

  const isCreate = title === '' || body === ''
  const isDeleteAllEvents = state.length === 0

  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)} />
        </div>

        <button className="btn btn-primary" onClick={addEvent} disabled={isCreate}>イベントを作成する</button>
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={isDeleteAllEvents}>全てのイベントを削除する</button>
        <button className="btn btn-danger" >全ての操作ログを削除する</button>
      </form>
      <Events events={state} deleteEvent={deleteEvent} />
    </>
  )
}


export default App