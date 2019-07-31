import React, { useContext } from 'react'
import Event from './Event'
import AppContext from '../contexts/AppContext'

const Events = () => {
  const { events } = useContext(AppContext)
  console.log(useContext(AppContext))
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
            />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Events