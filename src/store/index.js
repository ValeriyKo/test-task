import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers';

import sagaMiddleware from '../middlewares/saga';
import watchFetchPost from '../sagas/posts';
import watchSendComment from '../sagas/comments'

const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(watchFetchPost);
sagaMiddleware.run(watchSendComment);

export default store;
