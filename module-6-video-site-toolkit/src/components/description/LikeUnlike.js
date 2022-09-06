import { useDispatch } from "react-redux";
import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";
import { updateVideo } from "../../features/video/videoSlice";
import axios from "../../utils/axios";

export default function LikeUnlike({ video }) {
  const { likes, unlikes, id } = video;
  const dispatch = useDispatch();
  const handleAddLike = async () => {
    try {
      const response = await axios.put(`/videos/${id}`, {
        ...video,
        likes: likes + 1,
      });

      dispatch(updateVideo(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  const handleDislike = async () => {
    try {
      const response = await axios.put(`/videos/${id}`, {
        ...video,
        unlikes: unlikes + 1,
      });

      dispatch(updateVideo(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex gap-10 w-48">
      <div className="flex gap-1">
        <div className="shrink-0">
          <img
            onClick={handleAddLike}
            className="w-5 block cursor-pointer"
            src={likeImage}
            alt="Like"
          />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {likes}
        </div>
      </div>
      <div className="flex gap-1">
        <div className="shrink-0">
          <img
            onClick={handleDislike}
            className="w-5 block cursor-pointer"
            src={unlikeImage}
            alt="Unlike"
          />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {unlikes}
        </div>
      </div>
    </div>
  );
}
