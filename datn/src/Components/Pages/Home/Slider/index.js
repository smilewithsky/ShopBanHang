import React from 'react';

import { SliderWrapper } from './styled'
import ListSlider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function Slider(){
    const banner1 = "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656821198/ncpa3nsruexotfisojtw.png"
    const banner2 = "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656821201/ygtnkzecbf9gv0ria1ms.png"
    const banner3 = "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656821206/bt04wwlwwc5iuec1ky9x.png"
    const banner4 = "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656821210/uvs0ybt7qlfnpif7ojrn.jpg"
    const banner5 = "https://res.cloudinary.com/dg3ufqp14/image/upload/v1656821215/zlu38edr1mzchs804szh.png"

    const settings = {
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
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
    const listImage = [banner1 , 
      banner2 , banner3 , banner4 , banner5]

    return (
        <SliderWrapper>
            <div className='banner-slider'>
                <ListSlider {...settings}>
                    {listImage.map( (image , index) => (
                        <img key={`slider-${index}`} src={image} alt="" />
                    ) )}
                </ListSlider>
            </div>
        </SliderWrapper>
    )
}

export default Slider;
