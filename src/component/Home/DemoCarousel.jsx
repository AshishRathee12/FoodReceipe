import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './crausol.css'
import Nav from 'react-bootstrap/Nav';
class DemoCarousel extends Component {
    render() {

        return (
            <Carousel width="100%" autoPlay="true" interval={1600} infiniteLoop={true} className='navbar-crousal'>
                <Nav.Link>
                    <div>
                        <img src="/images/fresh food.png" />
                    </div>
                </Nav.Link>

                <div>
                    <img src='/images/chicken.png'></img>
                </div>
                <div>
                    <img src="/images/indian food.png" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src="/images/chicken curry.png" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                {/* <div>
                    <img src="/images/food ideas.png" />
                </div> */}
            </Carousel>
        );
    }
}
export default DemoCarousel
































