import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];

export default composeWithDevTools(applyMiddleware(...middleware));
