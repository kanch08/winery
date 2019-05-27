import React, {Component} from 'react';
import {connect} from "react-redux";

class ShippingData extends Component {
    render() {
        const { name, price, quantity, color} = this.props;

        const {images} = this.props;
        const findImage = images[0][color];
        return (


                <tr>
                    <td><img className="img_cart" width="100%" src={findImage} alt={`img-${name}`}/></td>
                    <td>{name}</td>
                    <td>{quantity}</td>
                    <td>{price * quantity}</td>
                </tr>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        images: state.cartReducer.images,

    }

}


export default connect(mapStateToProps, null)(ShippingData);