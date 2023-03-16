import React, { memo, useEffect, useState } from 'react';
import { RelationWrapper } from './styled'
import ListSlider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { productApi } from '../../../../../../Api';
import ProductItem from '../../../ProductItem';
import { v4 as uuidv4 } from 'uuid'
function Relation({typeProduct}){
    const [relationProduct , setRelationProduct] = useState([])

    useEffect( () => {
        try {
            const fetchData = async() => {
                const res = await axios.get(productApi)
                if(res.status === 200 || res.status === 201){
                    setTimeout(() => {
                        setRelationProduct(res.data)
                    } , 1500)
                }
            }

            fetchData()
        } catch (error) {
            
        }
    } , [] )

    let filterProduct = []
    
    if(relationProduct.length){
        const cloneProduct = [...relationProduct];
        filterProduct = cloneProduct.filter( item => {
            return item.typeProduct === typeProduct
        } )
    }

    console.log("filterProduct ",filterProduct);


    const settings = {
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
    };

    return (
        <RelationWrapper>
            <div className="row">
                <div className="col-12">
                    <h3 className='text-center relation-heading'>Sản Phẩm Liên Quan</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <ListSlider {...settings}>
                        {filterProduct.map(item => (
                            <ProductItem key={uuidv4()} product={item} />
                        ))}
                    </ListSlider>
                </div>
            </div>
        </RelationWrapper>
    )
}

export default memo(Relation);
