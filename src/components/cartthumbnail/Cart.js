import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from "react-router-dom";
import cartimage from "../assets/cart.svg";
import NotificationBadge, {Effect} from "react-notification-badge";
import '../stylesheet/cart.css';
import CartDetails from "./CartDetails";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartDetailRender: false,

        }
    }
    cartDetailOnOver = () => {
        this.setState({
            cartDetailRender: !this.state.cartDetailRender,
        })

    }

    render() {
        const {addedItems} = this.props;
        return (
            <div>
                <div className="cart"
                     onMouseEnter={this.cartDetailOnOver}
                     onMouseLeave={this.cartDetailOnOver}
                >
                    <NavLink to="/Cart">
                        <img
                            src={cartimage}
                            alt="cart"
                        />
                        <div className="badge-container">
                            <NotificationBadge
                                count={addedItems.length || 0}
                                effect={Effect.ROTATE_X}
                            />
                        </div>
                    </NavLink>
                    <div className="cart-details">
                        {
                            this.state.cartDetailRender?<CartDetails/> : null

                        }
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        addedItems: state.cartReducer.addedItems
    }

}

export default connect(mapStateToProps, null)(Cart);

