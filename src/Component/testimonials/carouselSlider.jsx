import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="relative">
        <Slider {...settings}>
          <div>
            <div className="grid grid-cols-2 gap-4 max-[640px]:grid-cols-1 max-[640px]:h-80">
              <div>
                <blockquote className="font-normal mt-16 mb-3 text-5xl xl:text-5xl lg:text-3xl md:text-2xl sm:text-xl max-[640px]:text-2xl max-[640px]:mt-2 max-[425px]:text-xl ">
                  <q className="richtext">We went from burning beans in our garage to needing a 10,000 sq. ft facility to meet customer demand.</q>
                </blockquote>
                <h3 className="testimonial-shop-name mb-sm text-2xl font-bold md:text-3xl mt-11 mb-3">BLK & Bold</h3>
                <div className="flex">
                  <p className="font-bold mr-2">Rod Johnson — </p>
                  <p>Owner</p>
                </div>
              </div>
              <div style={{ height: '500px', margin: 'auto' }} className=' max-[640px]:hidden'>
                <img style={{ height: '100%', objectFit: 'cover' }} src='/assets/signupimage.png' />
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4 max-[640px]:grid-cols-1 max-[640px]:h-80">
              <div>
                <blockquote className="font-normal mt-16 mb-3 text-5xl xl:text-5xl lg:text-3xl md:text-2xl sm:text-xl max-[640px]:text-2xl max-[640px]:mt-2 max-[425px]:text-xl ">
                  <q className="richtext">We went from burning beans in our garage to needing a 10,000 sq. ft facility to meet customer demand.</q>
                </blockquote>
                <h3 className="testimonial-shop-name mb-sm text-2xl font-bold md:text-3xl mt-11 mb-3">BLK & Bold</h3>
                <div className="flex">
                  <p className="font-bold mr-2">Rod Johnson — </p>
                  <p>Owner</p>
                </div>
              </div>
              <div style={{ height: '500px', margin: 'auto' }} className=' max-[640px]:hidden'>
                <img style={{ height: '100%', objectFit: 'cover' }} src='/assets/signupimage.png' />
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4 max-[640px]:grid-cols-1 max-[640px]:h-80">
              <div>
                <blockquote className="font-normal mt-16 mb-3 text-5xl xl:text-5xl lg:text-3xl md:text-2xl sm:text-xl max-[640px]:text-2xl max-[640px]:mt-2 max-[425px]:text-xl ">
                  <q className="richtext">We went from burning beans in our garage to needing a 10,000 sq. ft facility to meet customer demand.</q>
                </blockquote>
                <h3 className="testimonial-shop-name mb-sm text-2xl font-bold md:text-3xl mt-11 mb-3">BLK & Bold</h3>
                <div className="flex">
                  <p className="font-bold mr-2">Rod Johnson — </p>
                  <p>Owner</p>
                </div>
              </div>
              <div style={{ height: '500px', margin: 'auto' }} className=' max-[640px]:hidden'>
                <img style={{ height: '100%', objectFit: 'cover' }} src='/assets/signupimage.png' />
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4 max-[640px]:grid-cols-1 max-[640px]:h-80">
              <div>
                <blockquote className="font-normal mt-16 mb-3 text-5xl xl:text-5xl lg:text-3xl md:text-2xl sm:text-xl max-[640px]:text-2xl max-[640px]:mt-2 max-[425px]:text-xl ">
                  <q className="richtext">We went from burning beans in our garage to needing a 10,000 sq. ft facility to meet customer demand.</q>
                </blockquote>
                <h3 className="testimonial-shop-name mb-sm text-2xl font-bold md:text-3xl mt-11 mb-3">BLK & Bold</h3>
                <div className="flex">
                  <p className="font-bold mr-2">Rod Johnson — </p>
                  <p>Owner</p>
                </div>
              </div>
              <div style={{ height: '500px', margin: 'auto' }} className=' max-[640px]:hidden'>
                <img style={{ height: '100%', objectFit: 'cover' }} src='/assets/signupimage.png' />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}