import React from 'react'

const Event = ({ event, dispatch }) => {
  const deleteEvent = id => {
    if (window.confirm(`イベント(id=${id})を削除していいですか？`)) {
      dispatch({
        type: 'DELETE_EVENT',
        id
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