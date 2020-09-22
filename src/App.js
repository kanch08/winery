import React from 'react';
import CartContainer from './components/cartthumbnail/CartContainer';
import './components/stylesheet/main.css';
import {BrowserRouter as Router, Route, Redirect, withRouter} from "react-router-dom";
import Header from './components/header/Header';
import CartItem from './components/itemlist/CartItem';
import Checkout from "./components/checkoutComponent/Checkout";
import Customer from "./components/Customer";
import ProductDetails from "./components/cartthumbnail/ProductDetails";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Breadcrumbs from "./components/breadCrumb";
import TestComponent from "./components/TestComponent";
import "./components/stylesheet/main.css";


function App(props) {
    return (
        <Router>
            <div className="App">
                <ToastContainer/>
                <Header/>
                <div className="cartcontainer">
                    <Route
                        path ="/"
                        component={Breadcrumbs}

                    />
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
                        exact
                        path="/productdetails/"
                        render={() => <Redirect to="/"/>}
                    />

                    <Route
                        path="/productdetails/:id"
                        component={ProductDetails}
                    />
                    <Route
                        path="/test-component"
                        component={TestComponent}
                    />
                </div>
            </div>
        </Router>
    );
}

export default App;
