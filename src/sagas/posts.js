import { call, put, takeLatest } from 'redux-saga/effects';

import * as constants from '../constants/actions/posts'
import { requestPosts, requestPostsFail, requestPostsSuccess } from '../actions/posts';

function* watchFetchPost() {
  yield takeLatest(constants.FETCH_POSTS, fetchPostAsync);
}

function* fetchPostAsync() {
  try {
    yield put(requestPosts());
    const data = yield call(() => {
        return fetch('https://jsonplaceholder.typicode.com/posts')
          .then(res => res.json())
      }
    );
    yield put(requestPostsSuccess(data));
  } catch (error) {
    yield put(requestPostsFail(error));
  }
}

export default watchFetchPost;
