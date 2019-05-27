import React from 'react';
import CartContainer from './components/cartthumbnail/CartContainer';
import './components/stylesheet/main.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './components/header/Header';
import CartItem from './components/itemlist/CartItem';
import Checkout from "./components/checkoutComponent/Checkout";
import Customer from "./components/Customer";
import ProductDetails from "./components/cartthumbnail/ProductDetails";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
    return (
        <Router>
            <div className="App">
                <ToastContainer/>
                <Header/>

                <div className="cartcontainer">
                    <Route
                        exact path="/"
                        component={CartContainer}
                    />
                    <Route
                        path="/cart"
                        component={CartItem}
                    />
                    <Route
                        path="/checkout"
                        component={Checkout}
                    />
                    <Route
                        path="/customer"
                        component={Customer}
                    />
                    <Route
                        path="/productdetails/:id"
                        component={ProductDetails}
                    />

                </div>
            </div>
        </Router>
    );
}

export default App;
