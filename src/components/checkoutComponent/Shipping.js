import React, {Component} from 'react';
import ShippingData from './ShippingData';
import {connect} from 'react-redux';
import {addAmount} from '../actions/Action';

class Shipping extends Component {
    componentDidMount() {
        let {addAmount,total} = this.props;
        total = total+ 40+(0.05*total);
        addAmount(total);
    }

    render() {
        const {total, amount} = this.props;

        return (
            <>
                <table className="shipping-table">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.addedItems.map(item => {

                            return (
                                <ShippingData
                                    key={item.id}
                                    name={item.name}
                                    color={item.color}
                                    quantity={item.quantity}
                                    id={item.id}
                                    price={item.price}
                                />
                            )
                        })
                    }
                    </tbody>
                    <tfoot>
                    <tr>
                        <td colSpan="3">Total Price</td>
                        <td>{'\u20B9'}{total}</td>
                    </tr>
                    <tr>
                        <td colSpan="3">Shipping Charges</td>
                        <td>{'\u20B9'}40</td>
                    </tr>
                    <tr>
                        <td colSpan="3">GST</td>
                        <td>5%</td>
                    </tr>
                    <tr>
                        <td colSpan="3">Amount Payable</td>
                        <td>{'\u20B9'}{amount}</td>
                    </tr>

                    </tfoot>
                </table>

            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        thumb: state.reducer.thumb,
        addedItems: state.cartReducer.addedItems,
        total: state.cartReducer.total,
        amount:state.amountReducer.amount,

    }
}
const mapDispatchToProps = {
    addAmount
}


export default connect(mapStateToProps, mapDispatchToProps)(Shipping);