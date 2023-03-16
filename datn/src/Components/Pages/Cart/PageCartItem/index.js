import React from 'react';
import { Link } from 'react-router-dom';
import FormatMoney from '../../Common/FormatMoney';
function PageCartItem({imageProduct , idProduct , nameProduct , sizeProduct , priceProduct , quantity}){
    return (
        <div>
            <tr className='cart-list-item'>
                <td>X</td>
                <td>
                    <div className='cart-list-item__image'>
                        <img src={imageProduct} alt="" />
                    </div>
                </td>
                <td className='cart-list-item__name-product'>
                    <Link to={`/detail/${idProduct}`}>{nameProduct} - {sizeProduct}</Link>
                </td>
                <td className='cart-list-item__price'><FormatMoney price = {priceProduct} suffixes="đ" /></td>
                <td className='cart-list-item__quantity'>{quantity}</td>
                <td className='cart-list-item__sum-price'><FormatMoney price = {quantity * priceProduct} suffixes="đ" /> </td>
            </tr>
        </div>
    )
}

export default PageCartItem;
