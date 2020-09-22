import React, {Component} from 'react';

class CartItemButtons extends Component {
    render() {
        const {handleContinue,emptyCart,gotoCheckout}=this.props;

        return (
                <div className="tableButton">
                    <button onClick={()=>handleContinue()}>Continue Shopping</button>
                    <button onClick={()=>emptyCart()}>Empty Cart</button>
                    <button onClick={()=>gotoCheckout()}>Go To Checkout</button>
                </div>


        );
    }
}

export default CartItemButtons;