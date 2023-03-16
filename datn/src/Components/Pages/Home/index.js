import React, { memo, useEffect } from 'react';
import ProductItem from '../Common/ProductItem';
import NewProducts from './NewProducts';
import Slider from './Slider';
import axios from 'axios'
import { HomeWrapper } from './styled'
import { productApi } from '../../../Api';
import { useState } from 'react';
import Loading from '../Common/Loading';
import Aos from 'aos';
function Home(){
    const [listHomeProduct , setListHomeProduct] = useState();
    const [isloading , setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)

        Aos.init({duration: 1500})

        try {
            const HomeProduct = async() => {
                const response = await axios.get(productApi);
                if(response.status === 200 || response.status === 201){
                    setTimeout( () => {
                        setListHomeProduct(response.data)
                        setIsLoading(false)
                    } , 1500)
                }
            }
            HomeProduct()
        } catch (error) {
            console.log("error ",error);
        }
        return () => {

        }
    }, [])

    let selling;
    let newProduct ;
    if(listHomeProduct){
        const shadowProduct = [...listHomeProduct];
        selling = shadowProduct.slice(0,12);
        newProduct = shadowProduct.slice(shadowProduct.length - 6);
        // console.log("newProduct " ,newProduct);
    }

    if(isloading){
        return <Loading />
    }
    
    return (
        <HomeWrapper>
            <Slider />
            <div className='container'>
                <h3 className='title text-center'>SẢN PHẨM BÁN CHẠY</h3>
                <div className="row">
                    {
                        listHomeProduct ? selling.map( (item , index) => 
                            <div className='col-6 col-md-6 col-lg-4'>
                                <ProductItem product={item} key={`product-item-${item.id}`}  data-aos="fade-up" />
                            </div>
                        ) : "Không có sản phẩm"
                    }
                </div>
            </div>

            <div className='container'>
                <h3 className='title text-center'>HÀNG MỚI VỀ</h3>
                <NewProducts news={newProduct} />
            </div>
        </HomeWrapper>
    )
}

export default memo(Home);