import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    sumPrice: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;

      const newItemPrice = parseFloat(newItem.price).toFixed(2);

      state.sumPrice = (parseFloat(state.sumPrice) + parseFloat(newItemPrice)).toFixed(2);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItemPrice,
          quantity: 1,
          totalPrice: newItemPrice,
          name: newItem.name,
          imgSrc: newItem.imgSrc,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = (parseFloat(existingItem.totalPrice) + parseFloat(newItemPrice)).toFixed(2);
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;

      const itemPrice = parseFloat(existingItem.price).toFixed(2);

      state.sumPrice = (parseFloat(state.sumPrice) - parseFloat(itemPrice)).toFixed(2);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = (parseFloat(existingItem.totalPrice) - parseFloat(itemPrice)).toFixed(2);
      }
    },
    reset(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.sumPrice = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
