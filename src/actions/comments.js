import getApiAction from './apiAction'
import * as constants from '../constants/actions/comments'

export const apiSendComment = (postId, data) => getApiAction(constants.API__SEND_COMMENT, `/posts/${postId}/comments`, { method: 'POST', data});
