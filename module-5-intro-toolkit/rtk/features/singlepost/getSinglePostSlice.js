const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");
const { fetchRelatedPosts } = require("../relatedPost/relatedPostSlice");

// initial state
const initialState = {
  loading: false,
  post: {},
  error: "",
};

const fetchSinglePost = createAsyncThunk(
  "/getSinglePost",
  async (id, { dispatch }) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const post = await response.json();
    dispatch(fetchRelatedPosts(post?.title));
    return post;
  }
);

const singlePostSlice = createSlice({
  name: "singlePost",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchSinglePost.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchSinglePost.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.posts = action.payload;
    });
    builder.addCase(fetchSinglePost.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.error?.message;
      state.posts = {};
    });
  },
});
module.exports = singlePostSlice.reducer;
module.exports.fetchSinglePost = fetchSinglePost;
