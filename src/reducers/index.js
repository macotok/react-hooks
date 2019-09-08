const events = (state = [], action) => {
  switch(action.type) {
    case 'CREATE_EVENT':
      const event = { title: action.title, body: action.body };
      const stateLength = state.length;
      const id = stateLength ? state[stateLength - 1].id + 1 : 1;
      return [...state, { id, ...event }];
    case 'DELETE_EVENT':
      return state;
    case 'ALL_DELETE_EVENTS':
      return state;
    default:
      return state;
  }
}

export default events;
