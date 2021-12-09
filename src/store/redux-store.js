import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import { searchReducer } from "./searchSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    search: searchReducer,
  },
});

export default store;
