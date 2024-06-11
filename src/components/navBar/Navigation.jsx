import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const { items } = useSelector((state) => state.products);
  const totalQuantity = items.reduce((sum, obj) => sum + obj.quantity, 0);
  return (
    <header>
      <nav>
        <NavLink to={"/"}> Shop </NavLink>
        <NavLink to={"/basket"}>
          Basket <span>{totalQuantity}</span>
        </NavLink>
      </nav>
    </header>
  );
}
