import React from "react";
import { useDispatch } from "react-redux";
import { deleteAll } from "../../slice/producrsSlice";

export default function ButtonAllDelete() {
  const dispatch = useDispatch();
  const handlerClick = () => {
    dispatch(deleteAll());
  };
  return <button onClick={handlerClick}>Delete All</button>;
}
