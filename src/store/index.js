import { applyMiddleware, createStore } from 'redux';
import apiMiddleware from '../middlewares/api';
import rootReducer from '../reducers';

const middlewares = [apiMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
