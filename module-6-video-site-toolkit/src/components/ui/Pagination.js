import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../features/videos/videosSlice";

export default function Pagination() {
  const totalVideos = useSelector((state) => state?.videos?.total);
  const { tags, search, author } = useSelector((state) => state.filter);
  const [currentState, setCurrentState] = useState(1);
  const dispatch = useDispatch();
  const pageNumber = [];
  for (let index = 0; index < Math.ceil(totalVideos / 6); index++) {
    pageNumber.push(index + 1);
  }
  const handlePagination = (pageNumber) => {
    setCurrentState(pageNumber);
  };

  useEffect(() => {
    dispatch(fetchVideos({ tags, search, author, page: currentState }));
  }, [dispatch, currentState]);
  let style = (id) =>
    id == currentState
      ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
      : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";
  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        {pageNumber?.map((item) => (
          <div
            onClick={() => handlePagination(item)}
            className={`${style(item)}`}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
