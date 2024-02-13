import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

// make a initial state
const initialState = {
  isLoading: false,
  isError: false,
  data: [],
};

// api call
export const fetchAllProducts = createAsyncThunk(
  "fetchAllProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    return response.json();
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending),
      (state, action) => {
        state.isLoading = true;
      };
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchAllProducts.rejected, (state, actioin) => {
      state.isError = true;
    });
  },
});

// export the state
export const selectAllProducts = (state) => state.data;

// export const {} = productSlice.actions;
export default productSlice.reducer;
