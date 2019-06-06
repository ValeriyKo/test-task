export const getApiAction = (type, url, options) => ({
  type,
  payload: {
    request: {
      url,
      ...options,
    },
  },
});

export default getApiAction;
