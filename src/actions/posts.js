import * as constants from '../constants/actions/posts'

export const requestPosts = () => ({ type: constants.API__GET_POSTS});
export const requestPostsSuccess = (payload) => ({ type: constants.API__GET_POSTS_SUCCESS, payload});
export const requestPostsFail = (payload) => ({ type: constants.API__GET_POSTS_FAIL, payload});
export const fetchPosts = () => ({ type: constants.FETCH_POSTS });
