import React, {Component} from 'react';
import {connect} from 'react-redux';
import { changeCartColor,changeCartSize } from "../actions/Action";

class CartItemData extends Component {
    state ={
        buttonDisabled:false,
    }
    handleColorInCart=(event)=>{
        const {changeCartColor, id} = this.props;

      changeCartColor({
            color:event.target.value,
            id
        })
    }

    handleSizeInCart=(event)=>{
        this.props.changeCartSize(event.target.value);
    }


    render() {

        const {name, color, price, size, quantity, deleteItem, increaseQuantity, decreaseQuantity, id} = this.props;
        const {images} = this.props;
        // const lowerCaseColor = color.toLowerCase();
        const findImage = images[0][color];




        return (
            <tr>
                <td><img className="img_cart" width="100%" src={findImage} alt={`img-${name}`}/></td>
                <td>{name}</td>
                <td>{'\u20B9'}{price}</td>
                <td>
                    <select
                    name="color_cart"
                    onChange={this.handleColorInCart}
                    value={color}
                    >
                    <option value="darkblue">DarkBlue</option>
                    <option value="red">Red</option>
                    <option value="yellow">Yellow</option>
                    {size}
                </select>
                </td>
                <td>
                    <select
                        name="size_cart"
                        onChange={this.handleSizeInCart}

                        defaultValue={size}
                    >
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>

                </select>
                </td>
                <td>

                    <button className="quantity-button"
                        onClick={() => decreaseQuantity(id,quantity)}>
                        <i className=" fas fa-minus-circle"></i>
                    </button>
                    {quantity}
                    <button className="quantity-button"

                        onClick={() => increaseQuantity(id,quantity)}>
                        <i className="fas fa-plus-circle"></i>
                    </button>


                </td>
                <td>{'\u20B9'}{price * quantity}</td>
                <td>
                    <button className="quantity-button" onClick={() => deleteItem(id)}><i className="fas fa-trash"></i></button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        images: state.cartReducer.images,

    }

}
const mapDispatchToProps={
    changeCartSize,
    changeCartColor
}


export default connect(mapStateToProps, mapDispatchToProps)(CartItemData);