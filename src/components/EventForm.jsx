import React, { useState, useContext } from 'react';
import AppContext from '../contexts/AppContext'
import { timeCurrentIso8601 } from '../utils'

const EventForm = () => {
  const { state, dispatch } = useContext(AppContext)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  
  console.log(state)
  const addEvent = e => {
    e.preventDefault()
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body
    })
    dispatch({
      type: 'ADD_OPERATION_LOG',
      description: 'イベントを作成しました',
      operatedAt: timeCurrentIso8601()
    })
    setTitle('')
    setBody('')
  }

  const deleteAllEvents = e => {
    e.preventDefault()
    if (window.confirm('イベントを全て削除していいですか？')) {
      dispatch({ type: 'DELETE_ALL_EVENT' })

      dispatch({
        type: 'ADD_OPERATION_LOG',
        description: '全てのイベントを削除しました。',
        operatedAt: timeCurrentIso8601()
      })
    }
  }

  const deleteAllOperationLogs = e => {
    e.preventDefault()
    if (window.confirm('操作ログを全て削除していいですか？')){
      dispatch({ type: 'DELETE_OPERATION_LOGS'})
    }
  }

  const isCreate = title === '' || body === ''
  const isDeleteAllEvents = state.events.length === 0
  const isDeleteAllOperationLogs = state.operationLogs.length === 0

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
        <button className="btn btn-danger" onClick={deleteAllOperationLogs} disabled={isDeleteAllOperationLogs} >全ての操作ログを削除する</button>
      </form>
    </>
  )
}


export default EventForm