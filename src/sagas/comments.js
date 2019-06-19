import { call, put, takeEvery } from 'redux-saga/effects';

import * as constants from '../constants/actions/comments'
import { sendComment, sendCommentSuccess, sendCommentFail } from '../actions/comments';

function* watchSendComment() {
   yield takeEvery(constants.POST_COMMENT, sendCommentAsync);
}

function* sendCommentAsync({payload}) {
  const {postId, body} = payload;
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
