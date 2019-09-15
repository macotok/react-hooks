import {
  CREATE_EVENT,
  DELETE_EVENT,
  DELETE_ALL_EVENTS
} from '../actions';

const events = (state = [], action) => {
  switch(action.type) {
    case CREATE_EVENT:
      const event = { title: action.title, body: action.body };
      const stateLength = state.length;
      const id = stateLength ? state[stateLength - 1].id + 1 : 1;
      return [...state, { id, ...event }];
    case DELETE_EVENT:
      return state.filter(event => event.id !== action.id);
    case DELETE_ALL_EVENTS:
      return [];
    default:
      return state;
  }
}

export default events;
