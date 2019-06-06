import axiosMiddleware from 'redux-axios-middleware';
import axiosClient from './axiosClient';

export default axiosMiddleware(axiosClient, {
  interceptors: {
    response: [
      {
        success(state, response) {
          return response.data;
        },
        error(state, response) {
          if (!response.response) {
            response.response = {};
            response.response.data = {
              message: response.message,
            };
            response.response.status = 0;
          }

          return Promise.reject({ response: { data: response.response.data } });
        },
      },
    ],
  },
});
