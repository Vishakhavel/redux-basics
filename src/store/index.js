import { createStore } from 'redux'

let initialState = { counter: 0 }
const reducerFunction = (state = initialState, action) => {
  if (action.type === 'INC') {
    return {
      counter: state.counter + 1,
    }
  } else if (action.type === 'DEC') {
    return {
      counter: state.counter - 1,
    }
  }

  return state
}

const store = createStore(reducerFunction)

export default store
