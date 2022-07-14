import React, { useState, useEffect } from "react";
import "./Home.css";
import StarIcon from "@mui/icons-material/Star";

function Home(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);

  console.log(products);

  

  return (
    <>
      <div className="home">
        {products.map((data) => (
          <div className="card" id={data.id} key={data.id}>
            <div className="card__img">
              <img src={data.image} alt={data.title} />
            </div>
            <div className="card__info">
              <span>${data.price}</span>
              <h3>
                {" "}
                <StarIcon /> {data.rating.rate}
              </h3>
            </div>

            <div className="card__title">
              <p>{data.title}</p>
            </div>

            <div className="cart__button">
              <button
                onClick={() => props.addToCartHandler({
                  title: data.title,
                  img: data.image,
                  price: data.price,
                  rate: data.rate,
                  id: data.id,
                })}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
