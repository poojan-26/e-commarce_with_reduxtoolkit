import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  status: false
};

export const cartStatusSlice = createSlice({
  name: "cartStatus",
  initialState,
  reducers: {
    changeCartStatus(state, action) {
      state.status = action.payload;
    }
  }
});
export const cartStatus = (state) => state.cartStatusState.status;
export const { changeCartStatus } = cartStatusSlice.actions;
export default cartStatusSlice.reducer;
