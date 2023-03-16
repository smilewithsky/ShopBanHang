import React, { useEffect, useRef, useState } from 'react';
import Button from '../../Common/Button';
import Breadcrumb from '../Common/Breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBac } from '@fortawesome/free-solid-svg-icons'
import { PayWrapper } from './styled';
import Validate from './Validate';
import axios from 'axios';
import { cartApi, productApi } from '../../../Api';
import FormatMoney from '../Common/FormatMoney';
import Loading from '../Common/Loading';
import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
function Pay(){
    const [payList , setPayList] = useState([])
    const [products , setProducts] = useState([])
    const [isLoading , setIsLoading] = useState(false)
    useEffect( () => {
        setIsLoading(true)
        try {
            const fetchPayList = async() => {
                const resCart = await axios.get(cartApi)
                const resProduct = await axios.get(productApi)
                if(resCart.status == 200 || resCart.status == 201 || resProduct.status == 200 || resProduct.status == 201){
                    setTimeout( () => {
                        setProducts(resProduct.data)
                        setPayList(resCart.data)
                        setIsLoading(false)
                    } , 2500)
                }
                else{
                    console.log("sai dữ liệu");
                }
            }
            
            // const fetchProduct = async() => {
                
            //     if(){
            //         setTimeout( () => {
                        
            //         } ,1500)
            //     }
            //     else{
            //         console.log("dữ liệu lỗi");
            //     }
            // }
            fetchPayList()
            // fetchProduct()
        } catch (error) {
            console.log("error" ,error);
        }

        return () => {
            
        }
    } , [])

    if(isLoading){
        return <Loading />
    }

    return (
        <PayWrapper>
            <div className="container">
                <div className="row">
                    <Breadcrumb link="Thanh Toán" />
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <Validate payList={payList} products = {products} />
                    </div>

                    <div className="col-lg-6">
                        <div className="list-pay">
                            {payList.length ? payList.map( item => (
                                <NavLink to={`/detail/${item.idProduct}`} className='pay-item' key={`pay-item-${item.id}`}>
                                    <div className='pay-item__image'>
                                        <img src={item.imageProduct} alt="" />
                                    </div>
                                    <div className='pay-item__content'>
                                        <h3 className='pay-item__content-name'>{item.nameProduct}</h3>
                                        <div className='pay-item__content-data'>
                                            <span>- Size: {item.size}</span> <br />
                                            <span>- color: {item.colorProduct}</span> <br />
                                            <span>- quantity: {item.quantity}</span>
                                        </div>

                                        <p className='pay-item__content-price'>Giá: <span><FormatMoney price={item.priceProduct} suffixes="đ" /></span></p>
                                    </div>
                                </NavLink>
                            ) ) : <h3 className='text-center'>Hiện tại chưa có sản phẩm nào trong giỏ hàng vui lòng quay lại mua hàng</h3>}
                        </div>
                    </div>
                </div>
            </div>
        </PayWrapper>
    )
}

export default Pay;
