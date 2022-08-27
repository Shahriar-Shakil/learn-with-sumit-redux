import { combineReducers } from "redux";
import BlogReducer from "./blog/reducer";
import { filterBlogReducer } from "./filterBlog/reducer";

const rootReducer = combineReducers({
  blogs: BlogReducer,
  filterBlog: filterBlogReducer,
});

export default rootReducer;
