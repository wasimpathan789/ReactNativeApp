import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../Features/product/productSlice";
import productInfoSlice from "../Features/product/productInfoSlice";
import cartReducer from "../Features/Cart/CartSlice";
import experimentReducer from "../Features/experiment/ExperimentSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    productInfo: productInfoSlice,
    cart: cartReducer,
    experiment: experimentReducer,
  },
});
