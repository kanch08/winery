import React, {Component} from 'react';
import { connect } from 'react-redux';
import Slide from 'react-reveal/Slide';
import makeCarousel from 'react-reveal/makeCarousel';
import '../stylesheet/header.css';

class Header extends Component {
    render() {
        const { offers }=this.props;
        const CarouselUI = ({ children }) => <div className="offer-section">{children}</div>;
        const Carousel = makeCarousel(CarouselUI);

        return (
            <header>
                <Carousel defaultWait={2000} /*wait for 1000 milliseconds*/ >
                    {
                        offers.map((item,index)=>{
                            return(
                                <Slide bottom key={index}>
                                    <p key={index}>{item.text}</p>
                                </Slide>
                            )
                        })
                    }
                </Carousel>
            </header>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        offers:state.reducer.offers,


    }
}
export default connect(mapStateToProps,null)(Header);