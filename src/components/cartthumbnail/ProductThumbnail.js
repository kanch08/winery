import React, {Component} from 'react';
import CartMenuOption from './CartMenuOption';
import {connect} from 'react-redux';
import Pulse from 'react-reveal/Pulse';
import {Link} from "react-router-dom";

class ProductThumbnail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartMenuRender: false,
            selectedImage: this.props.defaultImage,
        }
    }

    cartMenuOnOver = (event) => {
        event.stopPropagation();
        this.setState({
            cartMenuRender: !this.state.cartMenuRender,
        })
    };

    handleChange = (e) => {
        console.log("radio button change func called with event", e);
        this.setState({
            selectedImage: e.target.value
        })
    }

    render() {
        const {productname, price, alt, id} = this.props;
        let imageRender = this.props.images;
        let imageKeys = Object.keys(this.props.images[0]);

        return (
            <Pulse>
                <div className="productThumbnail"
                     onMouseEnter={this.cartMenuOnOver}
                     onMouseLeave={this.cartMenuOnOver}
                >

                    {
                        imageKeys.map(item => {
                                return (
                                    this.state.selectedImage === item ?
                                        <Link className="link" to={{pathname:`productdetails/${id}`}} key={id}  ><div className="image">
                                            <img src={imageRender[0][item]} alt={alt}/>
                                        </div></Link> : null

                                )
                            }
                        )
                    }

                    <div className="detail">
                        <p>{productname}</p>
                        <p>{'\u20B9'}{price}</p>
                    </div>
                    <div className={`${productname} buttonNav`}>
                        {
                            this.state.cartMenuRender ?
                                <CartMenuOption
                                    id={id}
                                    onRadioChange={this.handleChange}
                                    imageKeys={imageKeys}
                                    name={productname}
                                    price={price}
                                    currentColor={this.state.selectedImage}
                                /> : null
                        }
                    </div>

                </div>
            </Pulse>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        images: state.reducer.images,
    }
}
export default connect(mapStateToProps, '')(ProductThumbnail);