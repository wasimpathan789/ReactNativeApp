import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// make a initial state
const initialState = {
  isLoading: false,
  isError: false,
  data: [],
};

// api call
export const newProducts = createAsyncThunk("newProducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
});

const ExperimentSlice = createSlice({
  name: "experiment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(newProducts.pending),
      (state, action) => {
        state.isLoading = true;
      };
    builder.addCase(newProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(newProducts.rejected, (state, actioin) => {
      state.isError = true;
    });
  },
});
// export const selectAllProducts = (state) => state.data;

export default ExperimentSlice.reducer;
