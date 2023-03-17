import { configureStore } from "@reduxjs/toolkit";
import mobileScreenSlice from "../features/mobile-screen/mobileScreenSlice";

const store = configureStore({
  reducer: {
    mobile: mobileScreenSlice,
  },
});
export default store;
