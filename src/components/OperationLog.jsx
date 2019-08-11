import React from 'react'

const OperationLog = ({ log }) => {
  return (
    <tr>
      <th>{log.description}</th>
      <th>{log.operatedAt}</th>
    </tr>
  )
}

export default OperationLog