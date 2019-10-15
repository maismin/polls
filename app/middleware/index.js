import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import logger from './logger';

const middleware = [thunk, logger];

export default applyMiddleware(...middleware);
