import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'
import { timeCurrentIso8601 } from '../utils'


const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext)

  const deleteEvent = id => {
    if (window.confirm(`イベント(id=${id})を削除していいですか？`)) {
      dispatch({ id, type: 'DELETE_EVENT' })
      dispatch({
        type: 'ADD_OPERATION_LOG',
        description: `id${id}のイベントを削除しました。`,
        operatedAt: timeCurrentIso8601()
      })
    }
  }

  return (
    <tr>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td><button type='button' className='btn btn-danger' onClick={() => deleteEvent(event.id)}>削除</button></td>
    </tr>

  )
}

export default Event