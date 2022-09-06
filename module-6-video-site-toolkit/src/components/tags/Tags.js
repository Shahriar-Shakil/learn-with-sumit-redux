import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetFilter } from "../../features/filter/filterSlice";
import { fetchTags } from "../../features/tags/tagsSlice";
import Tag from "./Tag";

export default function Tags() {
  const { tags } = useSelector((state) => state.tags);
  const {
    tags: filterTags,
    search,
    author,
  } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  return tags?.length > 0 ? (
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex justify-between  border-b overflow-y-auto">
        <div className="flex gap-2">
          {tags.map((tag) => (
            <Tag key={tag.id} title={tag.title} />
          ))}
        </div>
        {filterTags.length || search || author ? (
          <div
            onClick={() => dispatch(resetFilter())}
            className="bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-1 rounded-full cursor-pointer"
          >
            Reset
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  ) : null;
}
