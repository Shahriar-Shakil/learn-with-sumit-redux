import {
  ADD_AUTHOR,
  ADD_CATEGORIES,
  REMOVE_AUTHOR,
  REMOVE_CATEGORIES,
  SEARCH_INPUT_VALUE,
} from "./action";
const initialState = {
  author: "",
  categories: [],
  searchKeyword: "",
};

export const filterBlogReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_QUERY_TAG:
    //   const alreadyHas = state.tags.includes(action.payload);
    //   if (alreadyHas) {
    //     return state;
    //   } else
    //     return {
    //       ...state,
    //       tags: [...state.tags, action.payload],
    //     };
    // case REMOVE_QUERY_TAG:
    //   return {
    //     ...state,
    //     tags: state?.tags?.filter((item) => item !== action.payload),
    //   };
    case ADD_AUTHOR:
      return {
        ...state,
        author: action.payload,
      };
    case REMOVE_AUTHOR:
      return {
        ...state,
        author: "",
      };
    case ADD_CATEGORIES:
      const alreadyHas = state.categories.includes(action.payload);
      if (alreadyHas) {
        return state;
      } else {
        return {
          ...state,
          categories: [...state.categories, action.payload],
        };
      }
    case REMOVE_CATEGORIES:
      return {
        ...state,
        categories: state.categories.filter((item) => item !== action.payload),
      };
    case SEARCH_INPUT_VALUE:
      return {
        ...state,
        searchKeyword: action.payload,
      };
    default:
      return state;
  }
};
