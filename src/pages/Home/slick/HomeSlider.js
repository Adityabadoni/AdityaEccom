import React from "react";
import "./Homeslider.css"
import Slider from "react-slick";

import Slide1 from '../../../assets/images/slider-1.png';
import Slide2 from '../../../assets/images/slider-2.png';
import Newsletter from "../../../Component/NewsLetter/NewsLetter";

const HomeSlider =()=>{

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        arrows:true
      };
    return(
        <section className="Homeslider">

            <div className="container-fluid position-relative ">
                <Slider {...settings} className="homeSlider_main">
                    <div className="item">
                        <img src={Slide1} className="w-100"/>
                        <div className='info position-absolute  '>
                            <h2 class="mb-4">
                                Don’t miss amazing<br />
                                grocery deals
                            </h2>
                            <p>Sign up for the daily newsletter</p>
                            {/* <input type="text" className="Subscribe"  placeholder="Your Email address"/>
                            <button className="subs_button">Subscribe</button> */}
                        </div>
                    </div>
                    <div className="item">
                        <img src={Slide2} className='w-100' />
                        <div className='info'>
                            <h2 class="mb-3">
                                Fresh Vegetables<br />
                                Big discount
                            </h2>
                            <p>Sign up for the daily newsletter</p>
                            {/* <input type="text" className="Subscribe" placeholder="Your Email address"/>
                            <button className="subs_button">Subscribe</button> */}

                        </div>
                    </div>

                </Slider>
                <Newsletter/>

            </div>

        </section>
          )
}
export default HomeSlider