import { BASE_URL } from "../../../config/api";
import { updateTitleText } from "../actions";

const updateTitle = (todoId, text, setEditable) => {
  return async (dispatch) => {
    const response = await fetch(`${BASE_URL}/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        text: text,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const todo = await response.json();
    setEditable(false);
    dispatch(updateTitleText(todo.id, text));
  };
};

export default updateTitle;
