import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../stylesheet/cart.css';

class CartDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            isMouseInside:false,
        }
    }
    mouseOver=(event)=>{
        this.setState({
            isMouseInside:true,
        })
    }
    mouseOut=(event)=>{
        this.setState({
            isMouseInside:false,
        })
    }
    render() {
        const {addedItems} = this.props;
        return (

            <div
            onMouseOver={this.mouseOver}
            onMouseOut={this.mouseOut}
            >
                {
                    this.state.isMouseInside?
                        <table>
                            <tbody>
                            <tr>
                                <th>Product</th>
                                <th>Color</th>
                                <th>Size</th>
                            </tr>

                            {

                                addedItems.map(item => {
                                    return (


                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>{item.color}</td>
                                            <td>{item.size}</td>

                                        </tr>


                                    );
                                })
                            }
                            </tbody>

                        </table>:null
                }


            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        addedItems: state.cartReducer.addedItems
    }
}

export default connect(mapStateToProps, null)(CartDetails);