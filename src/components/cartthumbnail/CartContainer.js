import React, {Component} from 'react';
import ProductThumbnail from './ProductThumbnail';
import '../stylesheet/cart.css';
import {connect} from 'react-redux';
import CartDetails from './CartDetails';



class CartContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartDetailRender: false,

        }
    }

    cartDetailOnOver = (event) => {
        event.stopPropagation();
        this.setState({
            cartDetailRender: !this.state.cartDetailRender,
        })

    }

    render() {
        let prod = this.props.thumb;

        return (
            <>


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
                <div className="cart-details">
                    {
                        this.state.cartDetailRender?<CartDetails/> : null

                    }
                </div>
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