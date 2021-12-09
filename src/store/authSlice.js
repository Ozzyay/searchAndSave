import { createSlice } from "@reduxjs/toolkit";

let initialValue;
const storedData = JSON.parse(localStorage.getItem("loginStatus"));

if (!storedData) {
  initialValue = { isLoggedIn: false, authId: "", userId: "" };
} else {
  initialValue = storedData;
}

const authSlice = createSlice({
  name: "auth",
  initialState: initialValue,
  reducers: {
    setLogin(state, item) {
      state.isLoggedIn = item.payload.isLoggedIn;
      state.authId = item.payload.authId;
      state.userId = item.payload.localid;
      const parsedData = JSON.stringify(state);
      localStorage.setItem("loginStatus", parsedData);
    },
    setLogout(state) {
      state.isLoggedIn = false;
      state.authId = "";
      state.userId = "";
      localStorage.removeItem("loginStatus");
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
export default authSlice;
