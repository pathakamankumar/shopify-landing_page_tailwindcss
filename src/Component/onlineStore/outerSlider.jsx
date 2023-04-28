import React, { Component } from "react";
import Slider from "react-slick";
import InnerSlider from "./innerSlider";

export default class OuterSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <p>
                            <a>
                                <img src="https://embed-ssl.wistia.com/deliveries/f25ef9585e23754914d2ce93c75f556c.jpg?image_play_button_size=2x&amp;image_crop_resized=960x413&amp;image_play_button=1&amp;image_play_button_color=54bbffe0" height="171.25" className="w-full" />
                            </a>
                        </p>
                    </div>
                    <div>
                        <InnerSlider />
                    </div>
                    <div>
                        <a>
                            <img src="https://embed-ssl.wistia.com/deliveries/d1de6590f4f55c80da421d3b27bad5f8.jpg?image_play_button_size=2x&amp;image_crop_resized=960x413&amp;image_play_button=1&amp;image_play_button_color=54bbffe0" height="171.25" className="w-full" />
                        </a>
                    </div>
                </Slider>
            </div>
        );
    }
}