import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../data/productsData";

let initialState = {
  productsData
};

let filteredData = productsData;

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProducts(state, action) {
      const newState = productsData.filter((obj) => {
        return obj.fields.company === action.payload.value;
      });

      state.productsData =
        action.payload.value !== "all" ? newState : productsData;
      filteredData = state.productsData;
    },
    searchProducts(state, action) {
      const newState = productsData.filter((obj) => {
        return (
          obj.fields.name.includes(action.payload.value) ||
          obj.fields.company.includes(action.payload.value)
        );
      });
      filteredData = newState;
      state.productsData = newState;
    },
    priceFilterProducts(state, action) {
      const newState = filteredData.filter((obj) => {
        return obj.fields.price <= Number(action.payload.value * 100);
      });
      state.productsData = newState;
    }
  }
});

export const selectAllProducts = (state) => state.productsState.productsData;

export const {
  filterProducts,
  searchProducts,
  priceFilterProducts
} = productsSlice.actions;
export default productsSlice.reducer;
