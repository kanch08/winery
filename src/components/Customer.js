import React, {Component} from 'react';
import {connect} from 'react-redux';
import  DataTable  from './DataTable';
import CustomerTableRow from './customerTableRow';
import { clearCart } from '../components/actions/Action';
import Flash from 'react-reveal/Flash';
import '../components/stylesheet/checkout.css';

class Customer extends Component {
    handleBackToHomePage=(event)=>{
        this.props.clearCart();
        const{history}=this.props;
        history.push("/");
    }
    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        const {addedItems,formData,total}=this.props;

        return (
            <div className="checkout">
                <Flash>
                    <h2 className="heading">
                        Your Order has been placed !!
                    </h2>
                </Flash>
                <h3 className="sub-heading">
                    Product Details
                </h3>
                <DataTable
                    items={addedItems}
                    tableName="Product Table"
                />
                <div className="final-total">
                    <p>Final Total :{'\u20B9'}{total}</p>
                </div>
                <h3
                    className="sub-heading"
                >
                    Customer Details
                </h3>
                <CustomerTableRow
                    items={formData}
                    tableName="Customer Table"
                />

                <button
                    className="home-button"
                onClick={this.handleBackToHomePage}
                >Back To Home Page
                </button>



            </div>
        );
    }
}

export const mapStateToProps=(state)=> {

    return {

        addedItems: state.cartReducer,
        formData: state.formReducer,
        total:state.amountReducer.amount,

    }
}

export const mapDispatchToProps={
    clearCart
}


export default connect(mapStateToProps,mapDispatchToProps)(Customer);