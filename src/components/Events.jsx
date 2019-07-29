import React from 'react'
import Event from './Event'

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
            <Event
              event={event}
              deleteEvent={deleteEvent}
            />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Events