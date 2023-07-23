import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  coupons: [],
};

export const couponReducer = createReducer(initialState, {
  couponCreateRequest: (state) => {
    state.isLoading = true;
  },
  couponCreateSuccess: (state, action) => {
    state.isLoading = false;
    state.coupon = action.payload;
    state.success = true;
  },
  couponCreateFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },

  // get coupons of shop
  getCouponsShopRequest: (state) => {
    state.isLoading = true;
  },
  getCouponsShopSuccess: (state, action) => {
    state.isLoading = false;
    state.coupons = action.payload;
  },
  getCouponsShopFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // delete coupon of a shop
  deleteCouponRequest: (state) => {
    state.isLoading = true;
  },
  deleteCouponSuccess: (state, action) => {
    state.isLoading = false;
    state.message = action.payload;
  },
  deleteCouponFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  // get coupons
  getCouponsRequest: (state) => {
    state.isLoading = true;
  },
  getCouponsSuccess: (state, action) => {
    state.isLoading = false;
    state.coupons = action.payload;
  },
  getCouponsFailed: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },

  clearErrors: (state) => {
    state.error = null;
  },
});
