import React, { useEffect } from 'react';
import { ProductItemWrapper } from './styled'
import {NavLink} from 'react-router-dom'
import FormatMoney from '../FormatMoney';
// import "aos/dist/aos.css"
// import Aos from 'aos';

function ProductItem({ product }){
    const {id , typeProduct , saleProduct , nameProduct , priceProduct , colorProduct , descriptionProdoct} = product
    const imageFirst = colorProduct[0].image;
    // className='col-6 col-md-6 col-lg-4'

    // useEffect( () => {
    //     Aos.init({duration: 1500})
    // } , [])

    return (
        <>
            <ProductItemWrapper>
                <NavLink to={`/detail/${id}`} className="product-item">
                    <div className='product-item__image'>
                        <img src={imageFirst} alt="" />

                        <div className='product-item__image-colors'>
                            {
                                colorProduct.map( (item , index) => (
                                    <div key={`colorProduct-${index}`} className="product-item__image-colors__container">
                                        <div className='product-item__image-colors__container-image' image={item.image}>
                                            <img src={item.image} alt="" />
                                        </div>
                                        <p className='product-item__image-colors__container-text'>
                                            {item.color}
                                        </p>
                                    </div>
                                ) )
                            }
                        </div>
                    </div>
                    <div className='product-item__sale'>
                        {saleProduct ? <p className='product-item__sale-text'>{saleProduct}%</p> : ""} 
                    </div>
                    <div className='product-item__content'>
                        <h3 className='product-item__content-name'>{nameProduct}</h3>
                        {
                            saleProduct ? 
                            (
                                <div className='product-item__content-price'>
                                <p className='product-item__content-price-oldPrice'><FormatMoney price={priceProduct} suffixes="đ" /></p>
                                <p className='product-item__content-price-currentPrice'><FormatMoney price={priceProduct * ((100 - saleProduct) / 100)} suffixes="đ"/></p>
                                </div>
                            ) 
                                : 
                            (
                                <div className='product-item__content-price'>
                                    <p className='product-item__content-price-currentPrice'><FormatMoney price={priceProduct} suffixes="đ" /></p>
                                </div>
                            )
                        }
                    </div>
                </NavLink>
            </ProductItemWrapper>
        </>
    )
}

export default ProductItem;
