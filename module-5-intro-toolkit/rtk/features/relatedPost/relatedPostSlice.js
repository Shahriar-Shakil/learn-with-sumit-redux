const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

const initialState = {
  loading: false,
  relatedPosts: [],
  error: "",
};

const fetchRelatedPosts = createAsyncThunk(
  "/getRelatedPost",
  async (payload) => {
    let str = payload
      .split(" ")
      .map((key) => "title_like=" + key)
      .join("&");
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?${str}`
    );
    const posts = await response.json();

    return posts;
  }
);
const relatedPostSlice = createSlice({
  name: "relatedPost",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRelatedPosts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchRelatedPosts.fulfilled, (state, action) => {
      console.log("working here related,");

      state.loading = false;
      state.error = "";
      state.relatedPosts = action.payload;
    });
    builder.addCase(fetchRelatedPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.relatedPosts = [];
    });
  },
});
module.exports = relatedPostSlice.reducer;
module.exports.fetchRelatedPosts = fetchRelatedPosts;
