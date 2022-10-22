import React, { useState, useEffect, useContext } from "react";
//import { useNavigate } from "react-router-dom";
import { PlasticContext } from "../context/plastics";
import { CartContext } from "../context/cart";

const CheckoutForm = () => {
  const { cart, total } = useContext(CartContext);
  const { checkout } = useContext(PlasticContext);
  const [orderDetails, setOrderDetails] = useState({ cart, total, address: null, token: null });
  const [error, setError] = useState(null);
  //const history = useNavigate();

  useEffect(() => {
    if (orderDetails.token) {
      checkout(orderDetails);
      //clearCart();
      //history.push("/");
    }
  }, [orderDetails]);

  // Handle real-time validation errors from the card Element.
  const handleChange = (event) => {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }
  };

  // Handle form submission.
  const handleSubmit = async (event) => {
    event.preventDefault();
    setOrderDetails({ ...orderDetails });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="checkout-form">
        <label htmlFor="checkout-address">Shipping Address</label>
        <input
          id="checkout-address"
          type="text"
          onChange={(e) => setOrderDetails({ ...orderDetails, address: e.target.value })}
        />
        <div className="card-errors" role="alert">
          {error}
        </div>
      </div>
      <button type="submit" className="btn">
        Submit Order
      </button>
    </form>
  );
};

export default CheckoutForm;
