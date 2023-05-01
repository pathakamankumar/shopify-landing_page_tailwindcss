import React, { Component } from "react";
import Slider from "react-slick";

export default class InnerSlider extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "10px",
            slidesToShow: 3,
            // autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        };
        return (
            <div className="py-32 bg-teal-100 rounded-xl lg:py-28 md:py-20 sm:py-16 max-[640px]:py-10 max-[425px]:py-7 ">
                <Slider {...settings}>
                    <div className="p-5">
                        <img src="/assets/banner3.jpeg" />
                    </div>
                    <div className="p-5">
                        <img src="/assets/banner2.jpg" />
                    </div>
                    <div className="p-5">
                        <img src="/assets/banner3.jpeg" />
                    </div>
                    <div className="p-5">
                        <img src="/assets/banner4.jpg" />
                    </div>
                </Slider>
            </div>
        );
    }
}