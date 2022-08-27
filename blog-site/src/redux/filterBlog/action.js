export const ADD_QUERY_TAG = "ADD_QUERY_TAG";
export const REMOVE_QUERY_TAG = "REMOVE_QUERY_TAG";

export const addQueryTags = (tag) => {
  return {
    type: ADD_QUERY_TAG,
    payload: tag,
  };
};
export const removeQueryTags = (tag) => {
  return {
    type: REMOVE_QUERY_TAG,
    payload: tag,
  };
};
