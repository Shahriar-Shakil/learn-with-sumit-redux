const configureStore = require("@reduxjs/toolkit").configureStore;
const { createLogger } = require("redux-logger");

const singlePostReducer = require("../features/singlepost/getSinglePostSlice");
const relatedPostReducer = require("../features/relatedPost/relatedPostSlice");
const logger = createLogger();

const store = configureStore({
  reducer: {
    singlePost: singlePostReducer,
    relatedPost: relatedPostReducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
});
module.exports = store;
