import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const allProducts = createAsyncThunk("product.all", async () => {
  const respons = await axios.get(`https://fakestoreapi.com/products`);
  return respons.data;
});
