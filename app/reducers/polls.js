import { RECEIVE_POLLS } from '../actions/polls';

function polls(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POLLS:
      return {
        ...state,
        ...action.payload.polls,
      };
    default:
      return state;
  }
}

export default polls;
