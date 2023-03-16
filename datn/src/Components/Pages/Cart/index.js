import React, { memo, useEffect, useState } from 'react'
import Breadcrumb from '../Common/Breadcrumb'
import { CartWrapper } from './styled'
import axios from 'axios'
import { Link, NavLink, parsePath } from 'react-router-dom'
import {cartApi} from './../../../Api'
import Loading from './../Common/Loading'
import FormatMoney from '../Common/FormatMoney'
import CartEmpty from './../../assets/Images/cart_empty_background.webp'
function Cart() {
    const [listCart , setListCart] = useState([])
    const [isLoading , setIsLoading] = useState(false)
    useEffect( () => {
        document.title = "Giỏ Hàng"
        setIsLoading(true)
        const fetchData = async() => {
            const response = await axios.get(cartApi);
            setTimeout(() => {
                setIsLoading(false)
                setListCart(response.data)
            } , 1500)
        }
        fetchData()

        return () => {

        }
    } , [])

    const handleDetele = (id) => {
        axios.delete(cartApi+"/"+`${id}`)
            .then(res => {
                alert("Xóa sản phẩm thành công");
                const newList = [...listCart].filter( item => item.id !== id );
                setListCart(newList);
            })
            .catch( err => {
                alert(err)
            } )
    }

    if(isLoading){
        return <Loading />
    }

    const sumPrice = listCart.reduce( (result , value) => {
        return result + (value.priceProduct * value.quantity)
    } , 0)

  return (
    <CartWrapper>
        <div className="container">
            <div className="row">
                <Breadcrumb link="Giỏ Hàng"></Breadcrumb>
            </div>

            <div className="cart">
                <div className="row">
                    <div className='col-12'>
                        {
                            listCart.length ? 
                            <>
                                <table className='cart-list'>
                                    <tr className='cart-list-item'>
                                        <td></td>
                                        <td className='cart-list-item__image'>Hình Ảnh</td>
                                        <td className='cart-list-item__name-product'>Tên Sản Phâm</td>
                                        <td className='cart-list-item__price'>Giá</td>
                                        <td className='cart-list-item__quantity'>Số Lượng</td>
                                        <td className='cart-list-item__sum-price'>Đơn Giá</td>
                                    </tr>
                                    
                                    {listCart.map( cartItem => (
                                        <tr className='cart-list-item' key={`cart-item-${cartItem.id}`}>
                                            <td className='cart-list-item__remove' onClick={() => handleDetele(cartItem.id)}>X</td>
                                            <td>
                                                <div className='cart-list-item__image'>
                                                    <img src={cartItem.imageProduct} alt="" />
                                                </div>
                                            </td>
                                            <td className='cart-list-item__name-product'>
                                                <Link to={`/detail/${cartItem.idProduct}`}>{cartItem.nameProduct} - {cartItem.colorProduct} - {cartItem.size}</Link>
                                            </td>
                                            <td className='cart-list-item__price'><FormatMoney price = {cartItem.priceProduct} suffixes="đ" /></td>
                                            <td className='cart-list-item__quantity'>{cartItem.quantity}</td>
                                            <td className='cart-list-item__sum-price'><FormatMoney price = {cartItem.quantity * cartItem.priceProduct} suffixes="đ" /> </td>
                                        </tr>
                                    ) ) }

                                    <tr className='cart-list-item'>
                                        <td className='cart-list-item__sum-price'>Tổng Giá : <FormatMoney price={sumPrice} suffixes="đ" /></td>
                                    </tr>
                                </table>

                                <button className='btn btn-cart btn-pay'>
                                    <NavLink to="/pay">
                                        Thanh Toán
                                    </NavLink>
                                </button>
                            </>
                            :
                            <div>
                                <div className='cart-empty text-center'>
                                    <div className='contain'>
                                        <img className='image-empty' src={CartEmpty} alt="" />
                                        <p className='empty-text'>Hiện tại đang không có sản phẩm</p>
                                    </div>
                                </div>
                                <button className='btn btn-cart'>
                                    <NavLink to="/product">
                                        Trở Lại Mua Hàng
                                    </NavLink>
                                </button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </CartWrapper>
  )
}

export default memo(Cart)