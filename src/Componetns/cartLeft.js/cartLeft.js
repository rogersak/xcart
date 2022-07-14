import React from "react";
import "./cartLeft.css";

function CartLeft({img ,title , rate , price , id } , props) {

console.log(props)
  return (
    <>
        <div className="cart__left" key={id} id={id}>
          <div className="box__img">
            <img src={img} alt={title} />
          </div>
          <div className="box__info">
            <p className="title">{title}</p>
            <span className="price">${price}</span>
            <h3 className="rate">{rate}</h3>
          </div>
          <div className="cart__button">
            <button onClick={() => props.removeToCartHandler({id})}>Remove</button>
          </div>
        </div>
    </>
  );
}

export default CartLeft;
