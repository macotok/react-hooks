import React from 'react';

const OperationLog = ({ operationLog }) => (
  <tr>
    <td>{operationLog.description}</td>
    <td>{operationLog.operatedAt}</td>
  </tr>
);

export default OperationLog;
