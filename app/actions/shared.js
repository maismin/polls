import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { getInitialData } from '../utils/api';
import { receiveUsers } from './users';
import { receivePolls } from './polls';
import { setAuthedUser } from './authedUser';

const AUTHED_ID = 'simonmai';

export const handleInitialData = () => async dispatch => {
  dispatch(showLoading());
  const response = await getInitialData();
  const { users, polls } = response;
  dispatch(receiveUsers(users));
  dispatch(receivePolls(polls));
  dispatch(setAuthedUser(AUTHED_ID));
  dispatch(hideLoading());
};
