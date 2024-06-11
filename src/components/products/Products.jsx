import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../../thunks/productThunks";
import Product from "../products/Product";
import "../products/products.css";
import { addProduct } from "../../slice/producrsSlice";

const Products = () => {
  const { data, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const clickHandler = (product) => {
    dispatch(addProduct(product));
  };

  useEffect(() => {
    dispatch(allProducts());
  }, []);

  if (loading) return "Loading ...";

  return (
    <>
      <div className="products">
        {data.map((product, index) => {
          return (
            <Product
              key={index}
              product={product}
              clickHandler={clickHandler}
              text={"Basket"}
              className="product"
            />
          );
        })}
      </div>
    </>
  );
};

export default React.memo(Products);
/* .filter(
            (product) =>
              product.rating.rate > minValue && product.rating.rate < maxValue
          )*/
