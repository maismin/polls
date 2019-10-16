import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { savePollAnswer } from '../utils/api';

export const ADD_ANSWER = 'ADD_ANSWER';

export const addAnswer = ({ authedUser, id, answer }) => {
  return {
    type: ADD_ANSWER,
    payload: { authedUser, id, answer },
  };
};

export const handleAddAnswer = answerData => async dispatch => {
  dispatch(showLoading());
  await savePollAnswer(answerData);
  dispatch(addAnswer(answerData));
  dispatch(hideLoading());
};
