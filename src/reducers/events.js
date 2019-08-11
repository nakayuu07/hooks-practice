const initialState = []

const events = (state = initialState , action) => {
  switch(action.type) {
    case 'CREATE_EVENT':
      const event = { title: action.title, body: action.body}
      const length = state.length
      const id = !length ? 1 : state[length - 1].id + 1  
      return [...state, {id, ...event}]
    case 'DELETE_EVENT':
      return state.filter((event => event.id !== action.id))
    case 'DELETE_ALL_EVENT':
      return initialState
    default: 
      return state
  }
}


export default events