import { configureStore } from "@reduxjs/toolkit";
import ProductPeduser from "../slice/producrsSlice";

export const store = configureStore({
  reducer: {
    products: ProductPeduser,
  },
});
