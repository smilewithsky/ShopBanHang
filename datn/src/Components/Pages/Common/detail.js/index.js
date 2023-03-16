import React, { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Breadcrumb from '../Breadcrumb';
import { ProductDetailWrapper } from './detailPage/styled';
import axios from 'axios'
import { cartApi, productApi } from '../../../../Api';
import DetailPage from './detailPage';
import Loading from '../Loading';
import { EmptyItemWrapper } from './styled';
function Detail(){
    const [idImage , setIdImage] = useState(0);
    const [sizeProduct , setSizeProduct] = useState(0);
    const [isloading , setIsLoading] = useState(true);
    const [listProduct , setListProduct] = useState([]);
    const [listCart , setListCart] = useState([])
    const param = useParams();
   
    useEffect( () => {
        // console.log("param" , param);
        setIsLoading(true);
        try {
            const listProductFunc = async () => {
                const response = await axios.get(productApi);
                // console.log("response" , response);
                if(response.status === 200 || response.status === 201){
                    setTimeout( () => {
                        setListProduct(response.data)
                    } , 1000)
                }

                const cartList = await axios.get(cartApi)
                if(cartList.status === 200){
                    setTimeout(() => {
                        setListCart(cartList.data)
                        setIsLoading(false);
                    } , 1000)
                }
            }
            listProductFunc()
        } catch (error) {
            console.log("Failed ! ", error);
        }
        
        return () => {

        }
    } , [])

    let itemProduct = {}

    if(listProduct){
        const shadowProducts = [...listProduct];
        itemProduct = shadowProducts.find( item => item.id === param.id )
    }

    if(isloading){
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <Breadcrumb link="Chi Tiết Sản Phẩm" />
                </div>
                <div className="row">
                    {
                        itemProduct ? <DetailPage listCart={listCart} props={itemProduct} param={param} /> : 
                        <EmptyItemWrapper className='empty-item'>
                            <p className='empty-text'>
                                "Mặt Hàng Này Hiện Đang Không Có"
                            </p>
                        </EmptyItemWrapper>
                    }
                </div>

                <div className="row">
                    
                </div>
            </div>
                    
        </div>
    )
}

export default memo(Detail);
