import React from 'react'
import Event from './Event'
import AppContext from '../contexts/AppContext'

const Events = ({ events, dispatch }) => {
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
              key={`event-${event.id}-${event.title}`}
              event={event}
              dispatch={dispatch}
            />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Events