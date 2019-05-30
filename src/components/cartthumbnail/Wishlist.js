import React, {Component} from 'react';
import {NavLink} from "react-router-dom";


class Wishlist extends Component {
    render() {
        return (
            <div className="wishlist">
                <NavLink to="/Wishlist">
                    <i className="fas fa-bookmark"></i>
                </NavLink>
            </div>
        );
    }
}

export default Wishlist;