import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false, loginPanelIsVisible: false, isAuth: false, isAdmin: false, showAddFlower: false, ordersIsVisible: false },
  reducers: {
    showCart(state) {
      state.cartIsVisible = true;
    },
    hideCart(state) {
      state.cartIsVisible = false;
    },
    showLoginPanel(state) {
      state.loginPanelIsVisible = true;
    },
    hideLoginPanel(state) {
      state.loginPanelIsVisible = false;
    },
    enableAdminFunctions(state) {
      state.isAdmin = true;
    },
    showAddFlower(state) {
      state.showAddFlower = true;
    },
    hideAddFlower(state) {
      state.showAddFlower = false;
    },
    setIsAuthTrue(state) {
      state.isAuth = true;
    },
    setIsAuthFalse(state) {
      state.isAuth = false;
    },
    setIsAdminTrue(state) {
      state.isAdmin = true;
    },
    setIsAdminFalse(state) {
      state.isAdmin = false;
    },
    setOrdersIsVisibleTrue(state) {
      state.ordersIsVisible = true
    },
    setOrdersIsVisibleFalse(state) {
      state.ordersIsVisible = false
    }
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;