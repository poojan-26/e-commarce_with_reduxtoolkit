import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  status: false
};

export const menuStatusSlice = createSlice({
  name: "menuStatus",
  initialState,
  reducers: {
    changeMenuStatus(state, action) {
      state.status = action.payload;
    }
  }
});
export const menuStatus = (state) => state.menuStatusState.status;
export const { changeMenuStatus } = menuStatusSlice.actions;
export default menuStatusSlice.reducer;
