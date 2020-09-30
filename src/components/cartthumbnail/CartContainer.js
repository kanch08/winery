import React, {Component} from 'react';
import ProductThumbnail from './ProductThumbnail';
import '../stylesheet/cart.css';
import {connect} from 'react-redux';
import Cart from "./Cart";
import { getData } from "../actions/Action";


class CartContainer extends Component {
componentDidMount() {
    getData();
}

    render() {
        let prod = this.props.thumb;
        return (
            <React.Fragment>
                <Cart/>
                <div className="productContainer">
                    {
                        prod.map((item, index) => {
                            return (
                                <ProductThumbnail
                                        // image={item.image}
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

            </React.Fragment>
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