import * as constants from '../constants/actions/posts';

const initialState = Object.freeze({
  list: [],
  error: '',
  isProcessing: false,
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case constants.API__GET_POSTS: {
      return {
        ...state,
        error: '',
        isProcessing: true,
      };
    }

    case constants.API__GET_POSTS_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        list: payload.slice(-20),
        error: '',
        isProcessing: false,
      };
    }

    case constants.API__GET_POSTS_FAIL: {
      const {
        error: {
          response: { data },
        },
      } = action;
      return {
        ...state,
        error: data.message,
        isProcessing: false,
      };
    }

    default:
      return state;
  }
}

export default reducer;
