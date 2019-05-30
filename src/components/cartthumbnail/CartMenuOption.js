import React , {Component } from 'react';
import RadioButton from './cartMenuComponent/RadioButton';
import '../stylesheet/radio.css';
import SelectSize from './cartMenuComponent/SelectSize';
import {addToCart} from '../actions/Action';
import { connect} from 'react-redux';
import { toast } from "react-toastify";
import _  from 'lodash';

class CartMenuOption extends Component{
    constructor(props){
        super(props);
        this.state = {
            displayColorButton : false,
            currentColor: this.props.currentColor,
            size : "small",
            id:props.id,
        }
    }

    colorButton = (event) => {
        event.preventDefault();
        this.setState({
            displayColorButton : !this.state.displayColorButton
        });

    }


    handleRadioChange=(event)=>{
        event.stopPropagation();
        const id=_.uniqueId();
         this.setState({
             currentColor:event.target.value,
             id
         });

        this.props.onRadioChange(event);
    }

    handleChange = event => {
        event.stopPropagation();
        const id=_.uniqueId();
        this.setState({
            size: event.target.value,
            id
        });

    }

    itemAddedToast = () => toast.success('Item Successfully Added', { autoClose: 1000 ,position:"top-center"},);
    handleAdd=(e)=>{
        e.preventDefault();
        let selectSize = this.props.name + " size";

        this.itemAddedToast();

        this.props.addToCart({
            id: this.state.id,
            name : this.props.name,
            color: this.state.currentColor,
            price :this.props.price,
            size : this.state[selectSize] || this.state.size
        });
    }

    render(){
        const {imageKeys} = this.props;
        let btn = this.state.displayColorButton ? "displayBlock" : "hideBlock";
        return(
            <div>
                <div className={`${btn} cartmenu`}>
                    <RadioButton
                        name={this.props.name}
                        colorButtonToggle = {this.colorButton}
                        imageKeys = { imageKeys }
                        onRadioChange ={this.handleRadioChange}
                        currentColor={this.state.currentColor}
                    />
                </div>
                <div>
                    <SelectSize
                    name={this.props.name}
                    handleChange={(events) => this.handleChange(events)}
                    />
                </div>
                <div>
                    <button
                        value="Add To Cart"
                        onClick={this.handleAdd}
                    >
                        Add To Cart
                    </button>

                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cartData : state
})
const mapDispatchToProps = (dispatch) => ({
    addToCart : (data) => dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(CartMenuOption);