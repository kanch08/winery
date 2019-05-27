import React, {Component} from 'react';
import { connect } from 'react-redux';
import {NavLink} from "react-router-dom";
import cartimage from "../assets/cart.svg";
import NotificationBadge, {Effect} from "react-notification-badge";
import Slide from 'react-reveal/Slide';
import makeCarousel from 'react-reveal/makeCarousel';
import '../stylesheet/header.css';

class Header extends Component {
    render() {
        const { addedItems,offers }=this.props;
        const OfferContainer = (<div className="offer-section"> </div> );
        const CarouselUI = ({ children }) => <div className="offer-section">{children}</div>;


        const Carousel = makeCarousel(CarouselUI);


        return (

            <header>

                <Carousel defaultWait={1500} /*wait for 1000 milliseconds*/ >
                    {
                        offers.map((item,index)=>{
                            return(
                                <Slide bottom >
                                    <p key={item.id}>{item.text}</p>
                                </Slide>
                            )
                        })
                    }
                </Carousel>

                <div className="cart"
                     onMouseEnter={this.cartDetailOnOver}
                     onMouseLeave={this.cartDetailOnOver}
                >
                    <nav>

                    <NavLink to="/Cart">
                       <img
                        src={cartimage}
                        alt="cart"
                       />
                        <div className="badge container">
                            <NotificationBadge
                                count={addedItems.length || 0}
                                effect={Effect.ROTATE_X}
                            />
                        </div>
                    </NavLink>
                    </nav>

                </div>


            </header>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        offers:state.reducer.offers,
        addedItems:state.cartReducer.addedItems

    }
}

export default connect(mapStateToProps,null)(Header);