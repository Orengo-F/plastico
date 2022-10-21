import React from 'react';
import { BrowserRouter , Routes, Route } from "react-router-dom";
// Amplify
import Amplify from "aws-amplify";

// Pages
import Home from "./pages/Home"
import Error from "./pages/Error";
import Plastics from "./pages/Plastics";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import PlasticDetails from "./pages/PlasticDetails";
import Admin from './pages/Seller';

// Components
import Header from "./components/Header"

// Amplify Configurations
import awsExports from "./aws-exports";
Amplify.configure(awsExports);


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={< Header />}/>
      <Route index element={<Home/>} />
      <Route path="cart" element={<Cart />}/>
      <Route path="checkout" element={< Checkout />}/>
      <Route path="plastic" element={<Plastics />}/>
      <Route path="books/:id" children={<PlasticDetails></PlasticDetails>}/>
      <Route path="admin" element={ <Admin />}/>
      <Route path="*" element={ <Error />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
