import axios from "../../utils/axios";

export const getVideos = async (tags, search, author, page) => {
  let queryString = "";

  if (tags?.length > 0) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
  }

  if (search !== "") {
    queryString += `&q=${search}`;
  }
  if (author !== "") {
    queryString += `&author=${author}`;
  }

  const response = await axios.get(
    `/videos/?${queryString}&_page=${page}&_limit=6`
  );

  return { data: response.data, total: response.headers?.["x-total-count"] };
};
