import {
  GET_BLOG,
  BLOG_BY_AUTHOR,
  RESET_AUTHOR,
  FILTERED_BLOG,
  FILTERED_BY_INPUT,
} from "./actionTypes";

export const getBlogs = (blogs) => {
  return {
    type: GET_BLOG,
    payload: blogs,
  };
};
export const getBlogsByAuthor = (id) => {
  return {
    type: BLOG_BY_AUTHOR,
    payload: id,
  };
};
export const resetAuthor = (id) => {
  return {
    type: RESET_AUTHOR,
  };
};

export const filteredBlogs = (params) => {
  return {
    type: FILTERED_BLOG,
    payload: params,
  };
};
export const filteredByInput = (params) => {
  return {
    type: FILTERED_BY_INPUT,
    payload: params,
  };
};
