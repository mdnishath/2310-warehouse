import { createSlice } from "@reduxjs/toolkit";

//initial state
const initialState = {
  mobile: false,
  open: false,
};

const mobileScreenSlice = createSlice({
  name: "mobile",
  initialState,
  reducers: {
    isMobile: (state, action) => {
      if (action.payload <= 640) {
        state.mobile = true;
      } else {
        state.mobile = false;
        state.open = false;
      }
    },
    isMenuOpen: (state, action) => {
      state.open = action.payload;
    },
  },
});

export default mobileScreenSlice.reducer;
export const { isMobile, isMenuOpen } = mobileScreenSlice.actions;
