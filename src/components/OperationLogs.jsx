import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext'
import OperationLog from './OperationLog'

const OperationLogs = () => {
  const { state } = useContext(AppContext)
  return (
    <>
      <h4>操作ログ一覧</h4>
      <table className='table table-hober'>
        <thead>
          <tr>
            <th>内容</th>
            <th>日時</th>
          </tr>
        </thead>
        <tbody>
          {state.operationLogs.map((log, index) => {
            return (
              <OperationLog 
                key={`${log.description}-${index}`} 
                log={log}
                />
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default OperationLogs