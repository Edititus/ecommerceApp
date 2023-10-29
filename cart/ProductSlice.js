import { createSlice } from '@reduxjs/toolkit';


export const ProductSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const currentItems = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (currentItems) {
        currentItems.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = removeItem;
    },
    incrementQuantity: (state, action) => {
      const currentItems = state.cart.find(
        (item) => item.id === action.payload.id
      );
      currentItems.quantity++;
    },
    decrementQuantity: (state, action) => {
      const currentItems = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (currentItems.quantity === 1) {
        currentItems.quantity = 0;
        const removeItem = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        state.cart = removeItem;
      } else {
        currentItems.quantity--;
      }
    },
    cleanCart: (state) => {
      state.cart = [];
    }, 
  },
});
export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  cleanCart,
} = ProductSlice.actions;

export default ProductSlice.reducer;