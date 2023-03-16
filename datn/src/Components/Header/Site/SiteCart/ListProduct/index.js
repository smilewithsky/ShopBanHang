import React, { useEffect, useState } from 'react';
import { ListProductWrapper } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { cartApi } from '../../../../../Api';
import CartEmpty from './../../../../assets/Images/cart_empty_background.webp'

function ListProduct({ products , setIsLoading }) {
    const [listCartProductApi, setListCartProductApi] = useState([])
    useEffect(() => {
        try {
            const fetchData = async () => {
                setIsLoading(true)
                const response = await axios.get(cartApi);
                // console.log("res ", response);
                if (response.status === 200 || response.status === 201) {
                    setTimeout(() => {
                        setIsLoading(false)
                        setListCartProductApi(response.data)
                    }, 1500)
                }
            }

            fetchData()
        } catch (error) {
            setIsLoading(false)
            console.log("Không lấy được dữ liệu");
        }

        return () => {

        }
    }, [])

    const handleDelete = (id) => {
        axios.delete(cartApi+"/"+`${id}`)
            .then(res => {
                alert("xoa thanh cong")
                const newList = [...listCartProductApi].filter(item => item.id !== id);
                console.log("newList ",newList);
                setListCartProductApi(newList)
            })
    }

    return (
        <ListProductWrapper>
            {listCartProductApi.length ? listCartProductApi.map(product => (
                <div className='product-item' key={`propduct-cart-${product.id}`}>
                    <div className='product-item__content'>
                        <img src={product.imageProduct} alt="" className='product-item__image' />
                        <div className='product-item__info'>
                            <p className='product-item__name'>
                                {product.nameProduct} - {product.colorProduct} - {product.size}
                            </p>

                            <div className='product-item__box'>
                                <div className='product-item__container'>
                                    <p className='product-item__quantity'>{product.quantity}</p>
                                    <p className="product-item__price">
                                        {product.priceProduct}
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className='product-item__remove'>
                        <FontAwesomeIcon icon={faXmark} onClick={ () => handleDelete(product.id)} />
                    </div>
                </div>
            )) : (
                <div className='empty'>
                    <img src={CartEmpty} alt="" />
                    <p className='text-empty'>Hiện dang không có sản phẩm trong giỏ hàng</p>
                </div>
            )}
        </ListProductWrapper>
    )
}

export default ListProduct;
