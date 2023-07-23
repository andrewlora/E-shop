import axios from "axios";
import { server } from "../../server";

// create coupon
export const createCoupon = (d) => async (dispatch) => {
  try {
    dispatch({
      type: "couponCreateRequest",
    });

    const { data } = await axios.post(`${server}/coupon/create-coupon`, d, {
      withCredentials: true,
    });
    dispatch({
      type: "couponCreateSuccess",
      payload: data.coupon,
    });
  } catch (error) {
    dispatch({
      type: "couponCreateFail",
      payload: error.response.data.message,
    });
  }
};

// get Coupons of a shop
export const getCouponsShop = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getCouponsShopRequest",
    });

    const { data } = await axios.get(
      `${server}/coupon/get-coupons-shop/${id}`,
      {
        withCredentials: true,
      }
    );
    dispatch({
      type: "getCouponsShopSuccess",
      payload: data.coupons,
    });
  } catch (error) {
    dispatch({
      type: "getCouponsShopFailed",
      payload: error.response.data.message,
    });
  }
};

// delete coupon of a shop
export const deleteCoupon = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteCouponRequest",
    });

    const { data } = await axios.delete(
      `${server}/coupon/delete-shop-coupon/${id}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "deleteCouponSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteCouponFailed",
      payload: error.response.data.message,
    });
  }
};

// get coupons
export const getCoupons = () => async (dispatch) => {
  try {
    dispatch({
      type: "getCouponsRequest",
    });

    const { data } = await axios.get(`${server}/coupon/get-coupons`, {
      withCredentials: true,
    });
    dispatch({
      type: "getCouponsSuccess",
      payload: data.coupons,
    });
  } catch (error) {
    dispatch({
      type: "getCouponsFailed",
      payload: error.response.data.message,
    });
  }
};
