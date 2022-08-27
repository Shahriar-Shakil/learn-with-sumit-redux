import {
  GET_BLOG,
  BLOG_BY_AUTHOR,
  RESET_AUTHOR,
  FILTERED_BLOG,
  FILTERED_BY_INPUT,
} from "./actionTypes";

import { data } from "../../data";
const initialState = {
  blogs: [...data],
  filteredBlog: [],
};

const formateString = (str) => {
  return str?.replaceAll(" ", "_").toLowerCase();
};
export default function BlogReducer(state = initialState, action) {
  switch (action.type) {
    case FILTERED_BLOG:
      let mappedBlogsTags = state.blogs
        ?.map((blog) => {
          return {
            ...blog,
            tags: [
              formateString(blog.author.name),
              formateString(blog.category),
            ],
          };
        })
        .filter((item) => {
          return action.payload.every((value) => item.tags.includes(value));
        });

      return {
        ...state,
        filteredBlog: [...mappedBlogsTags],
      };
    case FILTERED_BY_INPUT:
      let filted = state?.blogs.filter((blog) => {
        return blog.title
          .toLocaleLowerCase()
          .includes(action.payload.toLocaleLowerCase());
      });

      return {
        ...state,
        filteredBlog: state?.blogs.filter((blog) => {
          return blog.title
            .toLocaleLowerCase()
            .includes(action.payload.toLocaleLowerCase());
        }),
      };
    default:
      return state;
  }
}
