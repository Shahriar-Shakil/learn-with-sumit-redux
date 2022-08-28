import { BASE_URL } from "../../../config/api";
import { deleted } from "../actions";

const deleteTodo = (todoId) => {
  return async (dispatch) => {
    await fetch(`${BASE_URL}/todos/${todoId}`, {
      method: "DELETE",
    });

    dispatch(deleted(todoId));
  };
};

export default deleteTodo;
