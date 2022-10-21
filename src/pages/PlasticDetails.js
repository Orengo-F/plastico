import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PlasticContext } from "../context/plastics";
import { CartContext } from "../context/cart";

const PlasticDetails = () => {
  const { id } = useParams();
  const history = useNavigate();
  const { plastics } = useContext(PlasticContext);
  const { addToCart } = useContext(CartContext);

  const plastic = plastics.find((plastic) => {
    return plastic.id === id;
  });
  if (!plastic) {
    return <h3>Loading...</h3>;
  }

  const { image: url, title, description, price } = plastic;

  return (
    <section className="book-details">
      <div className="detail-image">
        <img src={url} alt="10x Rule" />
      </div>
      <div className="detail-description">
        <h2>{title}</h2>
        <p>{description}</p>
        <h4>Price - $ {price}</h4>
        <button
          className="btn"
          onClick={() => {
            addToCart({ ...plastic, id });
            history.push("/cart");
          }}
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
};

export default PlasticDetails;
