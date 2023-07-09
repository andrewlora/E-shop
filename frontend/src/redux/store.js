import { configureStore } from "@reduxjs/toolkit";
import { eventReducer } from "./reducers/event";
import { userReducer } from "./reducers/user";

const Store = configureStore({
  reducer: {
    user: userReducer,
    events: eventReducer,
  },
});

export default Store;