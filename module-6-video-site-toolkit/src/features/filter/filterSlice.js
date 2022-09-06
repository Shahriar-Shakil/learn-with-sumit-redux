const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  tags: [],
  search: "",
  author: "",
};

const filterSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
    },
    tagRemoved: (state, action) => {
      const indexToRemove = state.tags.indexOf(action.payload);

      if (indexToRemove !== -1) {
        state.tags.splice(indexToRemove, 1);
      }
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
    authorSelect: (state, action) => {
      state.author = action.payload;
      state.tags = [];
      state.search = "";
    },
    resetFilter: (state) => {
      state.tags = [];
      state.search = "";
      state.author = "";
    },
  },
});

export default filterSlice.reducer;
export const { tagSelected, tagRemoved, searched, authorSelect, resetFilter } =
  filterSlice.actions;
