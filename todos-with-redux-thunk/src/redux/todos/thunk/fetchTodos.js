import { BASE_URL } from "../../../config/api";
import { loaded } from "../actions";

const fetchTodos = async (dispatch) => {
  const response = await fetch(`${BASE_URL}/todos`);
  const todos = await response.json();

  dispatch(loaded(todos));
};

export default fetchTodos;
