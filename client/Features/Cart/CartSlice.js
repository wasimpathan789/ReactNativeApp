import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
  totalQuantity: 0,
  quantity: 1,
};

// const initialState = [];

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartList.push(action.payload);
    },
    removeFromCart: (state, action) => {
      // state = state.cartList.filter((item) => item.id !== action.payload);
      state = state.cartList.splice(action.payload, 1);
    },
    getCartTotal: (state, action) => {
      let { totalAmount, totalCount } = state.cartList.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.totalAmount += itemTotal;
          cartTotal.totalCount += amount;
          return cartTotal;
        },
        { totalCount: 0, totalAmount: 0 }
      );
      state.totalAmount = parseInt;
      totalAmount.toFixed(2);
      state.totalCount = totalCount;
    },
    increment: (state, action) => {
      state.quantity += 1;
      // state.quantity = state.cartList.price * state.quantity;
      // state.cartList.price = cartList.price * quantity;
    },
    decrement: (state, action) => {
      state.quantity -= 1;
    },
  },
});
export const { addToCart, removeFromCart, totalPrice, increment, decrement } =
  CartSlice.actions;
export default CartSlice.reducer;
