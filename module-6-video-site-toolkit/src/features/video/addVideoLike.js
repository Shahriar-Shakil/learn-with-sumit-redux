import axios from "../../utils/axios";
import { fetchVideo } from "./videoSlice";

export const addVideoLike = async (params) => {
  try {
    await axios.put(`/videos/${params.id}`, {
      ...params,
      likes: params.likes + 1,
    });
    fetchVideo(params.id);
  } catch (error) {
    console.log(error);
  }
};
