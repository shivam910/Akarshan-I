import "./App.css";
import React, { useEffect } from "react";
import { Home } from "./component/Home";
import Client from "shopify-buy";

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: "Akarshan-I.myshopify.com",
  storefrontAccessToken: "2fe45afd281a8d98fc6e04a4f69dcd98",
});

function App() {
  useEffect(() => {
    // Fetch all collections, including their products
    client.collection.fetchAllWithProducts().then((collections) => {
      // Do something with the collections
      console.log(collections);
      console.log(collections[0].products);
    });
  });

  return (
    <div className="App">
      <Home />
      <h1>Hello</h1>
    </div>
  );
}

export default App;
