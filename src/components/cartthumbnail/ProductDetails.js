import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../stylesheet/main.css'
import {addToCart,addToWishlist} from "../actions/Action";
import {toast} from "react-toastify";
import CartMenuOption from "./CartMenuOption";
import SelectSize from "./cartMenuComponent/SelectSize";
import RadioButton from "./cartMenuComponent/RadioButton";

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: "small",
            currentColor: this.props.currentColor,
            selectedImage: this.props.defaultImage,
        }

    }

    itemAddedToast = () => toast.success('Item Successfully Added', {autoClose: 1000, position: "top-center"},);
    handleAdd = (e) => {
        e.preventDefault();
        let selectSize = this.props.name + " size";
        this.itemAddedToast();

        this.props.addToCart({
            id: this.state.id,
            name: this.props.name,
            color: this.state.currentColor,
            price: this.props.price,
            size: this.state[selectSize] || this.state.size
        });
    }

    handleWishlist=(event)=>{
        console.log("item added to wishlist");
        this.props.addToWishlist({
            id: this.state.id,
            name : this.props.name,
            color: this.state.currentColor,
            price :this.props.price,

        });
    }


    render() {
        const {product, images, id} = this.props;
        const {productname, price, default: color, description} = product;
        const image = images[0][color];
        let imageKeys = Object.keys(this.props.images[0]);
        return (
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
                                <i onClick={this.handleWishlist}
                                   className="fas fa-heart">

                                </i>
                            </div>
                        </div>
                        <div className="pdp-size">
                            <p>SELECT SIZE <i className="fas fa-angle-right"></i>
                                <SelectSize/>
                            </p>
                        </div>
                        <div className="pdp-color">
                            <p>SELECT COLOR <i className="fas fa-angle-right"></i>
                            </p>
                            {/*<RadioButton*/}
                            {/*    name={this.props.name}*/}
                            {/*    colorButtonToggle = {this.colorButton}*/}
                            {/*    imageKeys = { imageKeys }*/}
                            {/*    onRadioChange ={this.handleRadioChange}*/}
                            {/*    currentColor={this.state.currentColor}*/}
                            {/*/>*/}
                            {/*<RadioButton/></p>*/}
                        </div>
                        <div className="pdp-add">
                            <button
                                className="btn-add"
                                onClick={this.handleAdd}
                            >
                                <i className="fas fa-shopping-cart">
                                </i>Add To Cart
                            </button>
                            <button
                                className="btn-wishlist"
                                onClick={this.handleAddToWishlist}
                            >
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