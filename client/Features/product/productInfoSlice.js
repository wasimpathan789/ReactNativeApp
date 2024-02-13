import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  singleProduct: [],
};

const productInfoSlice = createSlice({
  name: "productInfo",
  initialState,
  reducers: {
    sendProductDetails: (state, action) => {
      state.singleProduct(action.payload);
    },
  },
});

export const { sendProductDetails } = productInfoSlice.actions;

export default productInfoSlice.reducer;
