import { RECEIVE_USERS } from '../actions/users';
import { ADD_POLL } from '../actions/polls';
import { ADD_ANSWER } from '../actions/answers';

function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.payload.users,
      };
    case ADD_POLL: {
      const { poll } = action.payload;
      const { author, id } = poll;
      return {
        ...state,
        [author]: {
          ...state[author],
          polls: state[author].polls.concat([id]),
        },
      };
    }
    case ADD_ANSWER: {
      const user = state[action.payload.authedUser];
      return {
        ...state,
        [action.payload.authedUser]: {
          ...user,
          answers: user.answers.concat([action.payload.id]),
        },
      };
    }
    default:
      return state;
  }
}

export default users;
