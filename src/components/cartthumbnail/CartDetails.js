import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../stylesheet/cart.css';
import { removeItem } from "../actions/Action";

class CartDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    removeItem = (id) => {
        this.props.removeItem(id);
    }
    render() {
        const {addedItems} = this.props;
        return (
            <table>
                <tbody>
                <tr>
                    <th>Product</th>
                    <th>Color</th>
                    <th>Size</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Delete</th>
                </tr>
                {
                    addedItems.map(item => {
                        return (

                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.color}</td>
                                <td>{item.size}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button
                                        className="btn-delete"
                                        onClick={()=>this.removeItem(item.id)}
                                    ><i className="fas fa-times-circle"></i>
                                    </button>
                                </td>
                            </tr>


                        );
                    })
                }
                </tbody>

            </table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        addedItems: state.cartReducer.addedItems
    }
}

const mapDispatchToProps={
    removeItem
}

export default connect(mapStateToProps,mapDispatchToProps)(CartDetails);