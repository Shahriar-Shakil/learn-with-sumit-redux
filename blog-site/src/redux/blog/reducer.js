import { data } from "../../data";
const initialState = {
  blogs: [...data],
};

const formateString = (str) => {
  return str?.replaceAll(" ", "_").toLowerCase();
};
export default function BlogReducer(state = initialState, action) {
  return {
    ...state,
  };
}
