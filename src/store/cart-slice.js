import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0, totalAmount: 0, changed: false },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const exitingItem = state.items.find((item) => item.id === newItem.id);
      if (!exitingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        exitingItem.quantity++;
        exitingItem.totalPrice = exitingItem.totalPrice + newItem.price;
      }
      state.totalQuantity++;
      state.totalAmount = state.totalAmount + newItem.price;
      state.changed = true;
    },
    removeItemToCart(state, action) {
      const id = action.payload;
      const exitingItem = state.items.find((item) => item.id === id);
      if (exitingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        exitingItem.quantity--;
        exitingItem.totalPrice = exitingItem.totalPrice - exitingItem.price;
      }
      state.totalQuantity--;
      state.totalAmount = state.totalAmount - exitingItem.price;
      state.changed = true;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
