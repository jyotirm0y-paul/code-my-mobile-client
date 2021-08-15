import './App.css';
import SignIn from './components/Login/SignIn';
import NotFound from './components/NotFound/NotFound';
import Products from './components/Products/Products'
import ProductDetails from './components/ProductDetails/ProductDetails'
import OrderList from './components/OrderList/OrderList'
import CheckOut from './components/CheckOut/CheckOut';
import Shipment from './components/Shipment/Shipment';
import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
export const UserContext = createContext();


function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/product/:id">
              <ProductDetails />
            </Route>
            <Route path="/checkout/:id">
              <CheckOut />
            </Route>
            <Route path="/shipment/:id">
              <Shipment />
            </Route>
            <Route path="/orders">
              <OrderList />
            </Route>
            <Route exact path="/">
              <SignIn />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
