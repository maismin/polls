import { RECEIVE_POLLS, ADD_POLL } from '../actions/polls';

function polls(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POLLS:
      return {
        ...state,
        ...action.payload.polls,
      };
    case ADD_POLL:
      return {
        ...state,
        [action.payload.poll.id]: action.payload.poll,
      };
    default:
      return state;
  }
}

export default polls;
