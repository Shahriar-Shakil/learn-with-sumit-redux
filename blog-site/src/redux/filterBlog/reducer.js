import { ADD_QUERY_TAG, REMOVE_QUERY_TAG } from "./action";
const initialState = {
  tags: [],
};

export const filterBlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUERY_TAG:
      const alreadyHas = state.tags.includes(action.payload);
      if (alreadyHas) {
        return state;
      } else
        return {
          ...state,
          tags: [...state.tags, action.payload],
        };
    case REMOVE_QUERY_TAG:
      return {
        ...state,
        tags: state?.tags?.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};
