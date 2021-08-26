  import React from "react";
  import { Home } from "./component/Home";
  import Client from "shopify-buy";
  import "./App.css";
  import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
  import Navbar from "./component/Navbar";
  import Footer from "./component/Footer";
  import Clothing from "./component/Products/Clothing";

  // Initializing a client to return content in the store's primary language
  const client = Client.buildClient({
    domain: "akarshan-online.myshopify.com",
    storefrontAccessToken: "d5cbac65ac113145b5758b9f36ae7890"
  });

  // id Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI3MjA3NzU4NjY0MA==
  // Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzI3MjA3ODIwOTIzMg=="
  // Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY3MzM1NjMwMzU4NTY="

  function App() {

    return (
      <Router>
        <Switch>
          <Route path="/products/clothing">
            <Navbar />
            <Clothing />
            <Footer />
          </Route>
          <Route path="/" exact={true}>
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }

  export default App;
