import { createSlice } from "@reduxjs/toolkit";
import { allProducts } from "../thunks/productThunks";
const initialState = {
  data: [],
  items: JSON.parse(localStorage.getItem("basket")) || [],
  loading: false,
  error: null,
};
export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (bilder) => {
    bilder
      .addCase(allProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(allProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(allProducts.rejected, (state) => {
        state.loading = false;
        state.error = "Error";
      });
  },
  reducers: {
    addProduct: (state, action) => {
      const existingProduct = state.items.find(
        (item) => item.product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ product: action.payload, quantity: 1 });
      }
      localStorage.setItem("basket", JSON.stringify(state.items));
    },
    removeProduct: (state, action) => {
      const existingProduct = state.items.find(
        (item) => item.product.id === action.payload.id
      );
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (item) => item.product.id !== action.payload.id
          );
        }
      }
      localStorage.setItem("basket", JSON.stringify(state.items));
    },
    deleteAll: (state) => {
      state.items = [];
      localStorage.setItem("basket", JSON.stringify(state.items));
    },
  },
});

export const { addProduct, removeProduct, deleteAll } = ProductsSlice.actions;

export default ProductsSlice.reducer;
