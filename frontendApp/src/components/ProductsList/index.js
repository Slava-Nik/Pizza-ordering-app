import React from "react";
import "./style.scss";


function ProductsList() {
  const products = [
    {
      id: 1,
      title: "Pepperoni Hot Pepper",
      imageSrc: "https://cdn.dodostatic.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
      basePrice: 11,
      popularity: 8,
    },
    {
      id: 2,
      title: "Cheese",
      imageSrc: "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
      basePrice: 10,
      popularity: 5,
    },
    {
      id: 3,
      title: "Super meat",
      imageSrc: "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/10922591-92d0-4965-9d13-5855b855a29e.jpg",
      basePrice: 15,
      popularity: 10,
    },
    {
      id: 4,
      title: "Margherita",
      imageSrc: "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg",
      basePrice: 8,
      popularity: 1,
    },
    {
      id: 5,
      title: "Mexican",
      imageSrc: "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/3354e3c2-8ce0-4d64-a11d-eb4c455b29c6.jpg",
      basePrice: 10,
      popularity: 4,
    },
    {
      id: 6,
      title: "Spanish chorizo sausages",
      imageSrc: "https://cdn.dodostatic.net/static/Img/Products/750065aab4ea45268fac2f17d4c56183_584x584.jpeg",
      basePrice: 11,
      popularity: 9,
    },
    {
      id: 7,
      title: "Four cheeses",
      imageSrc: "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/7d770266-c779-4e9d-b2bf-aa741de13bed.jpg",
      basePrice: 12,
      popularity: 10,
    },
    {
      id: 8,
      title: "Vegetable pizza",
      imageSrc: "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg",
      basePrice: 8,
      popularity: 2,
    },
    {
      id: 9,
      title: "Ham and mushrooms",
      imageSrc: "https://cdn.dodostatic.net/static/Img/Products/b1ffa66f2ebb4e959122e54eaa071109_584x584.jpeg",
      basePrice: 10,
      popularity: 8,
    },
  ];

  return (
    <>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">
        {
      products && products.map((product) => (
        <div className="pizza-block" key={product.id}>
          <img
            className="pizza-block__image"
            src="https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/10922591-92d0-4965-9d13-5855b855a29e.jpg"
            alt={product.title}
          />
          <h4 className="pizza-block__title">{product.title}</h4>
          <div className="pizza-block__selector">
            <ul>
              <li className="active">Thin</li>
              <li>Traditional</li>
            </ul>
            <ul>
              <li className="active">Small</li>
              <li>Medium</li>
              <li>Large</li>
            </ul>
          </div>
          <div className="pizza-block__bottom">
            <div className="pizza-block__price">
              Price:
              {" "}
              {product.basePrice}
              {" "}
              $
            </div>
            <div className="button button--outline button--add">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                  fill="white"
                />
              </svg>
              <span>Add</span>
              <i>2</i>
            </div>
          </div>
        </div>
      ))
        }
      </div>
    </>
  );
}

export default ProductsList;
