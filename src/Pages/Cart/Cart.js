import React, { useState, useEffect } from "react";
import "./Cart.css";
import CartLeft from "../../Container/leftContainer";
import CartRight from "../../Componetns/cartRight/cartRight";

function Cart(props) {
  console.log(props);

  const data = props.data;

  const [price, setPrice] = useState([]);

  
    

  return (
    <>
      <div className="cart">
        <CartRight />
        <div className="cart__items">
          {data.map((data) => (
            <CartLeft
              img={data.cartData.img}
              title={data.cartData.title}
              price={data.cartData.price}
              rate={data.cartData.rate}
              id={data.cartData.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Cart;
