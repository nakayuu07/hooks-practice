import React from 'react'

const Events = ({ events, deleteEvent }) => {
  return (
    <>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={`event-${event.id}`}>
              <td>{event.id}</td>
              <td>{event.title}</td>
              <td>{event.body}</td>
              <td><button type='button' className='btn btn-danger' onClick={() => deleteEvent(event.id)}>削除</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Events