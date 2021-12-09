import { createSlice } from "@reduxjs/toolkit";

let initialState;
const prevSaveList = JSON.parse(localStorage.getItem("saveList"));
if (prevSaveList && prevSaveList.length > 0) {
  initialState = { results: [], saveList: prevSaveList };
} else {
  initialState = { results: [], saveList: [] };
}

const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    searchResults(state, action) {
      state.results = action.payload;
      console.log(state.results);
    },
    saveResult(state, action) {
      state.saveList = [...state.saveList, action.payload];
      const savelist = JSON.stringify(state.saveList);
      localStorage.setItem("saveList", savelist);
    },
    removeSave(state, action) {
      state.saveList = state.saveList.filter(
        (elem) => elem.videoId !== action.payload
      );
      const savelist = JSON.stringify(state.saveList);
      localStorage.setItem("saveList", savelist);
    },
  },
});

export const searchActions = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
export default searchSlice;
