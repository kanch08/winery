import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../stylesheet/main.css'
import {addToCart, addToWishlist} from "../actions/Action";
import {toast} from "react-toastify";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import SelectSize from "./cartMenuComponent/SelectSize";
import RadioButton from "./cartMenuComponent/RadioButton";
import _ from "lodash";

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size : "small",
            id:props.id,
            displayColorButton : false,
            // currentColor: this.props.currentColor,
            tcolor:this.props.product.default,
            selectedImage: this.props.defaultImage,

        }

    }


    itemAddedToast = () => toast.success('Item Successfully Added', {autoClose: 1000, position: "top-center"},);
    itemAddedToWishlistToast = () => toast.warning('Item Added to Wishlist', {autoClose: 1000, position: "top-center"},);

    handleAdd = (e) => {
        e.preventDefault();
        let selectSize = this.props.name + " size";
        this.itemAddedToast();

        this.props.addToCart({
            id: this.state.id,
            name: this.props.product.productname,
            color: this.state.tcolor,
            price: this.props.product.price,
            size: this.state[selectSize] || this.state.size,

        });
    }

    colorButton = (event) => {
        event.preventDefault();
        this.setState({
            displayColorButton : !this.state.displayColorButton
        });

    }


    handleRadioChange=(event)=>{
        console.log('handle on radio change called',event);
        event.stopPropagation();
        const id=_.uniqueId();
        this.setState({
            currentColor:event.target.value,
            tcolor: event.target.value,
            id
        });

    }



    handleChange = event => {
        event.stopPropagation();
        const id=_.uniqueId();
        this.setState({
            size: event.target.value,
            id
        });

    }

    handleAddToWishlist = (event) => {
       this.itemAddedToWishlistToast();
        this.props.addToWishlist({
            id: this.state.id,
            name: this.props.product.productname,
            color: this.state.tcolor,
            price: this.props.product.price,
            size: this.state.size,

        });
    }


    render() {
        const {product, images} = this.props;
        let imageKeys = Object.keys(this.props.images[0]);
        const { productname, price, description } = product;
        const image = images[0][this.state.tcolor];

        return (
            <>
            <Cart/>
            <Wishlist/>

            <div className="product-detail">
                <div className="top-section">
                    <div className="thumbnail">
                        <img src={image} alt={`img-${productname}`}/>
                    </div>
                    <div className="short-description">
                        <div className="pdp-price-info">
                            <h1 className="pdp-title">{productname}</h1>
                            <h1 className="pdp-name">Casual Men's Tshirt</h1>

                            <strong>{'\u20B9'}{price}</strong><span>(20% Off)</span>

                            <p>Additional tax may apply; charged at checkout</p>

                            <div className="pdp-wishlist">
                                <i
                                    onClick={this.handleAddToWishlist}
                                    className="fas fa-heart"
                                >

                                </i>
                            </div>
                        </div>
                        <div className="pdp-size">
                            <p>SELECT SIZE <i className="fas fa-angle-right"></i>
                            <SelectSize
                                    name={this.props.name}
                                    handleChange={(events) => this.handleChange(events)}
                            />
                            </p>

                        </div>
                        <div className="pdp-color">
                            <p>SELECT COLOR <i className="fas fa-angle-right"></i>
                            <RadioButton
                                 name={productname}
                                // colorButtonToggle={this.colorButton}
                                imageKeys={imageKeys}
                                 onRadioChange={this.handleRadioChange}
                                 currentColor={this.state.tcolor}
                            />
                            <RadioButton/>
                            </p>
                        </div>
                        <div className="pdp-add">
                            <button className="btn-add" onClick={this.handleAdd}>
                                <i className="fas fa-shopping-cart"></i>Add To Cart
                            </button>

                            <button className="btn-wishlist" onClick={this.handleAddToWishlist}>
                                <i className="fas fa-hand-holding-heart"></i>
                                Add To Wishlist
                            </button>

                        </div>
                    </div>


                </div>


                <div className="pdp-description">
                    <h2>Product Description</h2>
                    <p>{description}</p>
                </div>


            </div>
                </>


        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const {id} = ownProps.match.params;
    const product = state.reducer.thumb.find(item => item.id === id);
    return {
        images: state.reducer.images,
        cartData: state,
        addedItems: state.cartReducer.addedItems,
        product,
        wishlistItems: state.wishlistReducer.wishlistItems
    }
}

const mapDispatchToProps = {
    addToCart,
    addToWishlist
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);