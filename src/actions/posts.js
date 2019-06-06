import getApiAction from './apiAction'
import * as constants from '../constants/actions/posts'

export const apiGetPosts = () => getApiAction(constants.API__GET_POSTS, '/posts');
