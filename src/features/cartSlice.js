import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  cartItems: []
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload.product;
      const newProduct = {
        id: product.id,
        name: product.fields.name,
        price: product.fields.price,
        image: product.fields.image[0].thumbnails.large.url,
        quantity: 1
      };
      const found = state.cartItems.some((el) => el.id === newProduct.id);
      if (!found) {
        state.cartItems.push(newProduct);
      }
      if (found) {
        const newState = state.cartItems.map((el) =>
          el.id === newProduct.id ? { ...el, quantity: el.quantity + 1 } : el
        );
        state.cartItems = newState;
      }
    },
    removeFromCart(state, action) {
      const deleteID = action.payload;
      const newCartItems = state.cartItems.filter((product) => {
        return product.id !== deleteID;
      });
      state.cartItems = newCartItems;
    },
    increaseQuantity(state, action) {
      const productID = action.payload;
      const newState = state.cartItems.map((el) =>
        el.id === productID ? { ...el, quantity: el.quantity + 1 } : el
      );
      state.cartItems = newState;
    },
    decreaseQuantity(state, action) {
      const product = action.payload;
      let newState;
      if (product.quantity > 1) {
        newState = state.cartItems.map((el) =>
          el.id === product.id ? { ...el, quantity: el.quantity - 1 } : el
        );
      } else {
        newState = state.cartItems.filter((item) => {
          return item.id !== product.id;
        });
      }
      state.cartItems = newState;
    }
  }
});

export const selectCartProducts = (state) => state.cartState.cartItems;
export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
} = cartSlice.actions;
export default cartSlice.reducer;
