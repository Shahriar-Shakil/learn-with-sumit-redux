// export const ADD_QUERY_TAG = "ADD_QUERY_TAG";
// export const REMOVE_QUERY_TAG = "REMOVE_QUERY_TAG";
export const SEARCH_INPUT_VALUE = "SEARCH_INPUT_VALUE";
export const ADD_AUTHOR = "ADD_AUTHOR";
export const REMOVE_AUTHOR = "REMOVE_AUTHOR";
export const ADD_CATEGORIES = "ADD_CATEGORIES";
export const REMOVE_CATEGORIES = "REMOVE_CATEGORIES";

export const getSearchInputValue = (text) => {
  return {
    type: SEARCH_INPUT_VALUE,
    payload: text,
  };
};

export const addAuthor = (author) => {
  return {
    type: ADD_AUTHOR,
    payload: author,
  };
};
export const removeAuthor = () => {
  return {
    type: REMOVE_AUTHOR,
  };
};
export const addCategories = (category) => {
  return {
    type: ADD_CATEGORIES,
    payload: category,
  };
};
export const removeCategories = (category) => {
  return {
    type: REMOVE_CATEGORIES,
    payload: category,
  };
};
