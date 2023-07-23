const express = require("express");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");
const { isSeller } = require("../middleware/auth");
const Coupon = require("../model/coupon");
const router = express.Router();

// create coupon
router.post(
  "/create-coupon",
  isSeller,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const isCouponExists = await Coupon.find({
        name: req.body.name,
      });

      if (isCouponExists.length !== 0) {
        return next(new ErrorHandler("Coupon already exists!", 400));
      }
      const coupon = await Coupon.create(req.body);
      res.status(201).json({
        success: true,
        coupon,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

// get all coupons of a shop
router.get(
  "/get-coupons-shop/:id",
  isSeller,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const coupons = await Coupon.find({ shopId: req.seller.id });
      res.status(201).json({
        success: true,
        coupons,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

// delete coupon of a shop
router.delete(
  "/delete-coupon/:id",
  isSeller,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const coupon = await Coupon.findByIdAndDelete(req.params.id);

      if (!coupon) {
        return next(new ErrorHandler("Coupon doesn't exists!", 400));
      }
      res.status(201).json({
        success: true,
        message: "Coupon deleted successfully!",
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

// get coupon value by its name
router.get(
  "/get-coupon-value/:name",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const coupon = await Coupon.findOne({ name: req.params.name });

      res.status(200).json({
        success: true,
        coupon,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

module.exports = router;
