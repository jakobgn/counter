import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  RESET_COUNTER,
} from "../constants/counter-constants";

const INITIAL_STATE = {
  count: 0,
  history: [],
}

function handleChange(state, change) {
  const {count, history} = state;
  return ({
    count: count + change,
    history: [count + change, ...history]
  })
}

export default function counter(state = INITIAL_STATE, action) {
  switch(action.type) {
    case INCREMENT_COUNTER:
      return handleChange(state, 1);
    case DECREMENT_COUNTER:
      return handleChange(state, -1);
    case RESET_COUNTER:
      return (INITIAL_STATE)
    default:
      return state;
  }
}