const store = require("./rtk/app/store");
const {
  fetchRelatedPosts,
} = require("./rtk/features/relatedPost/relatedPostSlice");
const {
  fetchSinglePost,
} = require("./rtk/features/singlepost/getSinglePostSlice");
// store.subscribe(() => {
//   console.log(store.getState());
// });
store.dispatch(fetchSinglePost(10));
//  store.dispatch(fetchRelatedPosts());
