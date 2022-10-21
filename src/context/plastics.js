import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { listPlastics } from "../api/queries";
import { processOrder } from "../api/mutations";

const PlasticContext = React.createContext();

const PlasticProvider = ({ children }) => {
  const [plastics, setPlastics] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPlastic();
  }, []);

  const checkout = async (orderDetails) => {
    const payload = {
      id: uuidv4(),
      ...orderDetails
    };
    try {
      await API.graphql(graphqlOperation(processOrder, { input: payload }));
      console.log("Order is successful");
    } catch (err) {
      console.log(err);
    }
  };

  const fetchPlastic = async () => {
    try {
      setLoading(true);
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql({
        query: listPlastics,
        authMode: "API_KEY"
      });
      const plastics = data.listPlastics.items;
      const featured = plastics.filter((plastic) => {
        return !!plastic.featured;
      });
      setPlastics(plastics);
      setFeatured(featured);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PlasticContext.Provider value={{ plastics, featured, loading, checkout }}>
      {children}
    </PlasticContext.Provider>
  );
};

export { PlasticContext, PlasticProvider };
