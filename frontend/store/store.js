import { createStore, applyMiddleware } from 'redux';
import thunk from '../middleware/thunk';
import logger from 'redux-logger';
import reducer from '../reducers/rootReducer';

const configureStore = () => createStore(reducer, { }, applyMiddleware(thunk, logger));


export default configureStore;
