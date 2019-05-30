import React, {Component} from 'react';
import ProductForm from './ProductForm';
import Shipping from './Shipping';
import '../stylesheet/checkout.css';
import Pulse from 'react-reveal/Pulse';
import swal from 'sweetalert';



class Checkout extends Component {
    constructor(props){
        super(props);
        this.state={
            isFormSubmitted:false,
        }
    }

    handleSendingData = (event) => {
        const {history} = this.props;
        swal({
            title: "Are you sure?",
            text: "Once Proceed, you will not be able to revert it back!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((result) => {
                if (result) {
                    history.push("/customer");
                    swal("Congratulations!", "Order placed successfully!", "success");
                }
            });

    }
    toggleSubmitState = () =>{
        this.setState({
            isFormSubmitted:true,
        })
    }

    render() {
        return (
            <>
                <div>
                    <Pulse> <h2 className="heading">Your Billing Details</h2></Pulse>
                </div>
                <div className="checkout-container">
                    <div>
                    <ProductForm toggleSubmitState={this.toggleSubmitState}/>
                    </div>
                    <div className="shipping">
                        <h3 className="sub-heading">Order Details</h3>
                    <Shipping/>
                    </div>
                </div>
                <button
                    disabled={!this.state.isFormSubmitted}
                    className = {!this.state.isFormSubmitted? "disabled order-button" :"order-button"}
                    onClick={this.handleSendingData}
                >Place Order
                </button>
            </>
        )
    }
}

export default Checkout;