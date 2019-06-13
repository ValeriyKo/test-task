import { call, put, takeLatest } from 'redux-saga/effects';

import * as constants from '../constants/actions/comments'
import { sendComment, sendCommentSuccess, sendCommentFail } from '../actions/comments';

function* watchSendComment() {
  yield takeLatest(constants.POST_COMMENT, sendCommentAsync);
}

function* sendCommentAsync({postId, body}) {
  try {
    yield put(sendComment());
    const data = yield call(() => {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, { method: "POST", body })
          .then(res => res.json())
      }
    );
    yield put(sendCommentSuccess(data));
  } catch (error) {
    yield put(sendCommentFail(error));
  }
}

export default watchSendComment;
