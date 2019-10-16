import { RECEIVE_POLLS, ADD_POLL } from '../actions/polls';
import { ADD_ANSWER } from '../actions/answers';

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
    case ADD_ANSWER: {
      const { answer, id, authedUser } = action.payload;
      const poll = state[id];
      const votesKey = `${answer}Votes`;

      return {
        ...state,
        [id]: {
          ...poll,
          [votesKey]: poll[votesKey].concat([authedUser]),
        },
      };
    }
    default:
      return state;
  }
}

export default polls;
