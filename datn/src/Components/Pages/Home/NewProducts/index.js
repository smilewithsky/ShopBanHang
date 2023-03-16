import React from 'react';
import { NewsProductWrapper } from './styled'
import ProductItem from '../../Common/ProductItem';


import ListNewsSlider  from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function  NewProducts({news}){
    // console.log("newss" , news);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        padding: 10,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
      };
    return (
        <NewsProductWrapper>
            <ListNewsSlider {...settings}>
                {
                    news ? news.map( (item , index) => 
                        <div className={item.id}>
                          <ProductItem key={`product-item-${item.id}`} product={item} />
                        </div>
                    ) : ""
                }
            </ListNewsSlider>
        </NewsProductWrapper>
    )
}

export default NewProducts;
