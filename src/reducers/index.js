import { combineReducers } from 'redux';
import events from './events.js';
import operationLogs from './operationLogs';

export default combineReducers({
  events,
  operationLogs,
})
