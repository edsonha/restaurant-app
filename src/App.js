import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import OrderPage from "./components/OrderPage/OrderPage";
import AdminPage from "./components/AdminPage/AdminPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/orders" component={OrderPage} />
            <Route path="/admin" component={AdminPage} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
