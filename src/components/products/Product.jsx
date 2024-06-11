import React from "react";

const Product = ({ product, clickHandler, text, quantity, className }) => {
  const star = "\u2605";

  return (
    <div className={className} key={product.id}>
      <div className="img-block">
        <img src={product.image}></img>
      </div>
      <div className="contetnt">
        <h3>{product.title}</h3>
        <span>{product.category}</span>
        <p>{product.description}</p>
        <p>{(() => star.repeat(Math.floor(product.rating.rate)))()}</p>
        <p className=" price">{product.price} $</p>
        {quantity && <span>{quantity}</span>}
        <button onClick={() => clickHandler(product)}>{text}</button>
      </div>
    </div>
  );
};

export default React.memo(Product);
//* <Like products={product} />*//
