import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { savePoll } from '../utils/api';

export const RECEIVE_POLLS = 'RECEIVE_POLLS';
export const ADD_POLL = 'ADD_POLL';

export const addPoll = poll => {
  return {
    type: ADD_POLL,
    payload: {
      poll,
    },
  };
};

export const handleAddPoll = poll => async (dispatch, getState) => {
  const { authedUser } = getState();
  dispatch(showLoading());
  const savedPoll = await savePoll({
    ...poll,
    author: authedUser,
  });
  dispatch(addPoll(savedPoll));
  dispatch(hideLoading());
};

export const receivePolls = polls => {
  return {
    type: RECEIVE_POLLS,
    payload: {
      polls,
    },
  };
};
