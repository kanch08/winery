import React, {Component} from 'react';
import ProductThumbnail from './ProductThumbnail';
import '../stylesheet/cart.css';
import {connect} from 'react-redux';
import Cart from "./Cart";
import List from "../List";
import Toggle from "../Toggle";
import UserLink from "../UserLink";


class CartContainer extends Component {
    render() {
        let prod = this.props.thumb;
        const items = [
            {id:1, body: 'This is my first test'},
            {id:2, body: 'This is my second test'},
            {id:3, body: 'This is my third test'},
            {id:4, body: 'This is my fourth test'},
        ]

        return (
            <>
                <Cart/>
                <div className="productContainer">
                    {
                        prod.map((item, index) => {
                            return (
                                <ProductThumbnail
                                        image={item.image}
                                        productname={item.productname}
                                        category={item.category}
                                        price={item.price}
                                        alt={item.alt}
                                        key={index}
                                        id={item.id}
                                        defaultImage={item.default}

                                    />

                                )
                            }
                        )
                    }
                </div>
                <Toggle />
                <UserLink />

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        thumb: state.reducer.thumb,
        addedItems: state.cartReducer.addedItems
    }
}

export default connect(mapStateToProps, '')(CartContainer);
