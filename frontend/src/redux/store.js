import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cart";
import { eventReducer } from "./reducers/event";
import { productReducer } from "./reducers/product";
import { userReducer } from "./reducers/user";
import { wishlistReducer } from "./reducers/wishlist";

const Store = configureStore({
  reducer: {
    user: userReducer,
    events: eventReducer,
    cart: cartReducer,
    products: productReducer,
    wishlist: wishlistReducer,
  },
});

export default Store;
