import React, {Component} from 'react';
import '../stylesheet/tableItem.css';
import {connect} from "react-redux";
import CartItemData from './CartItemData';
import {clearCart, subQuantity, addQuantity, removeItem} from "../actions/Action";
import CartItemButtons from "./CartItemButtons";
import swal from 'sweetalert';
import {toast} from 'react-toastify';
import Pulse from 'react-reveal/Pulse';


class CartItem extends Component {
    state={
        isCartEmpty:this.props.isCartEmpty,
    }

    handleContinue = (event) => {
        const {history} = this.props;
        history.push("/");
    }

    emptyCart = (event) => {
        // event.stopPropagation();
        console.log("cart is now empty");
        this.props.clearCart();
        this.setState({
            isCartEmpty:true,
        })
    }

    addQuantity = (id,quantity) => {

        if(quantity>=10){
            toast.error('quantity can not be greater than 10');
        } else{
            this.props.addQuantity(id);

        }
    }

    subQuantity = (id,quantity) => {
        if(quantity<=2){
            toast.error('quantity can not be less than 1');
        } else {
            this.props.subQuantity(id);
        }
    }

    removeItem = (id) => {
        this.props.removeItem(id);
    }

    gotoCheckout = (event) => {
        const {history} = this.props;

        if(this.props.addedItems.length!==0){

            history.push("/checkout");
        }
        else{
            swal("Oops!Cart was empty!!");
            history.push("/");
        }

    }

    render() {

        return (
            <>
            {this.state.isCartEmpty?
                <div className="empty-cart">
                    <Pulse><p>Oops!!Your cart is empty</p></Pulse>
                    <button
                        onClick={this.handleContinue}
                    >
                        Continue Shopping
                    </button>
                </div>



                :
            <div className="cartItem">
                <h1>SHOPPING CART</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Product</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Color</th>
                        <th>Size</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Delete</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        this.props.addedItems.map(item => {

                            return (
                                <CartItemData
                                    key = {item.id}
                                    name={item.name}
                                    price={item.price}
                                    color={item.color}
                                    size={item.size}
                                    quantity={item.quantity}
                                    increaseQuantity={this.addQuantity}
                                    decreaseQuantity={this.subQuantity}
                                    deleteItem={this.removeItem}
                                    id={item.id}
                                />
                            )
                        })
                    }
                    </tbody>

                </table>

            <CartItemButtons
                handleContinue={this.handleContinue}
                emptyCart={this.emptyCart}
                gotoCheckout={ this.gotoCheckout }
            />
            </div>}
        </>

        )
    }
}

const mapStateToProps = (state) => {
    let length = state.cartReducer.addedItems.length;
    let isCartEmpty= () => (length ===0);
    console.log("value of CartEmpty",isCartEmpty());
    console.log("length is ",length)

    return {
        thumb: state.reducer.thumb,
        addedItems: state.cartReducer.addedItems,
        total: state.cartReducer.total,
        isCartEmpty:isCartEmpty(),

    }
}

const mapDispatchToProps = (dispatch) => ({
    clearCart: () => dispatch(clearCart()),
    addQuantity: (id) => dispatch(addQuantity(id)),
    subQuantity: (id) => dispatch(subQuantity(id)),
    removeItem: (id) => dispatch(removeItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);