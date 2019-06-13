import * as constants from '../constants/actions/comments'

export const sendComment = () => ({ type: constants.API__SEND_COMMENT });
export const sendCommentSuccess = (payload) => ({ type: constants.API__SEND_COMMENT_SUCCESS, payload });
export const sendCommentFail = (payload) => ({ type: constants.API__SEND_COMMENT_FAIL, payload });
export const postComment = (payload) => ({ type: constants.POST_COMMENT, payload });
