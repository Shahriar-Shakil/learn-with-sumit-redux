import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filteredBlogs } from "../../redux/blog/actions";
import { addQueryTags } from "../../redux/filterBlog/action";

export default function SingleBlog({ blog }) {
  const dispatch = useDispatch();
  const filteredTags = useSelector((state) => state.filterBlog?.tags);

  const handleAddQuery = (tags) => {
    const formateTags = tags.replaceAll(" ", "_").toLowerCase();
    dispatch(addQueryTags(formateTags));
  };

  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={blog.image} alt="" />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            <span
              onClick={() => handleAddQuery(blog?.category)}
              className="inline-flex cursor-pointer	 items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
            >
              {blog?.category}
            </span>
          </p>
          <a href="#" className="block mt-1">
            <p className="text-xl font-semibold text-gray-900">{blog?.title}</p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <img
              onClick={() => handleAddQuery(blog?.author?.name)}
              className="h-10 w-10 rounded-full cursor-pointer"
              src={blog?.author?.image}
              alt=""
            />
          </div>
          <div className="ml-3">
            <p
              onClick={() => handleAddQuery(blog?.author?.name)}
              className="text-sm cursor-pointer font-medium text-gray-900 hover:underline"
            >
              {blog?.author?.name}
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime="2020-03-16">{blog?.publish_at}</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
