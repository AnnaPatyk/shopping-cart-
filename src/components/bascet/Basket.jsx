import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../products/Product";
import { removeProduct } from "../../slice/producrsSlice";
import styles from "../bascet/basket.module.css";
import ButtonAllDelete from "./ButtonAllDelete";

export default function Basket() {
  const { items } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const clickHandler = (product) => {
    dispatch(removeProduct(product));
  };

  return (
    <div className={styles.basketBlok}>
      {items.length ? (
        <>
          {items.map((product, index) => {
            return (
              <Product
                className={styles.basketProduct}
                key={index}
                product={product.product}
                clickHandler={clickHandler}
                text={"delete"}
                quantity={product.quantity}
              />
            );
          })}
          <ButtonAllDelete></ButtonAllDelete>
        </>
      ) : (
        <h2>Shopping cart is empty</h2>
      )}
    </div>
  );
}
