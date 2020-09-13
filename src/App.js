import React from 'react';
import CartContainer from './components/cartthumbnail/CartContainer';
import './components/stylesheet/main.css';
import {Route, Redirect} from "react-router-dom";
import Header from './components/header/Header';
import CartItem from './components/itemlist/CartItem';
import Checkout from "./components/checkoutComponent/Checkout";
import Customer from "./components/Customer";
import ProductDetails from "./components/cartthumbnail/ProductDetails";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Breadcrumbs from "./components/breadCrumb";
import "./components/stylesheet/main.css";


function App(props) {
    return (
        <>
            <div className="App">
                <ToastContainer/>
                <Header/>


                <div className="cartcontainer">
                    {/*<Route*/}
                    {/*    path="/"*/}
                    {/*    component={Breadcrumbs}*/}

                    {/*/>*/}

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
                       path="/"
                        component={CartContainer}
                    />

                </div>
            </div>
        </>
    );
}

export default App;
