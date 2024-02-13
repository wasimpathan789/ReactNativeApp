import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  isLoading: false,
  user: null,
  error: null,
};
export const loginUser = createAsyncThunk(
  "loginUser",
  async (userCredentials) => {
    //   const response = await fetch("https://fakestoreapi.com/products");
    const request = await axios.post("", userCredentials);
    const response = await request.data.data;
    localStorage.setItem("user", JSON.stringify(response));
    return response;
  }
);

const AuthSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      //   state.user.push(action.payload);
      state.user = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      (state.isLoading = false), (state.error = true);
      console.log(action.error.message);
      if (action.error.message === "Request failed with status code 401") {
        state.error = "Access Denied! Invalid Credentials";
      } else {
        state.error = action.error.message;
      }
    });
  },
});
export default AuthSlice.reducer;
