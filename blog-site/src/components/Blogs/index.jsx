import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAuthor, removeCategories } from "../../redux/filterBlog/action";
import SingleBlog from "./singleBlog";
export default function Blogs() {
  const blogs = useSelector((state) => state.blogs?.blogs);
  const filteredState = useSelector((state) => state.filterBlog);
  const dispatch = useDispatch();
  // const handleRemoveQuery = (query) => {
  //   dispatch(removeQueryTags(query));
  //   dispatch(filteredBlogs([]));
  // };

  const filterSearchHandler = (blog) => {
    return blog.title.toLowerCase().includes(filteredState.searchKeyword);
  };
  const filteredByAuthor = (blog) => {
    if (filteredState.author) {
      return (
        blog.author.name.replaceAll(" ", "_").toLowerCase() ===
        filteredState.author
      );
    } else {
      return blog;
    }
  };
  const filterByCategory = (blog) => {
    if (filteredState.categories.length) {
      return filteredState.categories.every((item) =>
        blog.category.toLowerCase().replaceAll(" ", "_").includes(item)
      );
    } else {
      return blog;
    }
  };
  let blogPosts = [];
  blogPosts = blogs
    ?.filter(filterSearchHandler)
    .filter(filteredByAuthor)
    .filter(filterByCategory)
    .map((blog) => {
      return <SingleBlog blog={blog} />;
    });

  return (
    <section className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            ALL BLOGS ARE HERE
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
        </div>
        {/* card grid  */}
        <div className="flex">
          {filteredState?.author ? (
            <span class="bg-blue-100 flex items-center capitalize text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
              {filteredState?.author.replaceAll("_", " ")}
              <svg
                onClick={() => dispatch(removeAuthor())}
                className="w-4 h-4 ml-2 hover:text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          ) : (
            <></>
          )}
          {filteredState?.categories?.map((item) => {
            return (
              <span
                id={item}
                class="bg-blue-100 flex items-center capitalize text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
              >
                {item?.replaceAll("_", " ")}{" "}
                <svg
                  onClick={() => dispatch(removeCategories(item))}
                  className="w-4 h-4 ml-2 hover:text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            );
          })}
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {blogPosts}
        </div>
      </div>
    </section>
  );
}
