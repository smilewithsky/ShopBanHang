import React, { memo } from 'react';
import { AdminProductCartWrapper } from './styled'
import FormatMoney from './../../../../../Common/FormatMoney'
function ProductItem({item}){
    // console.log("Product item ",item);
    const {colorProduct , id , idProduct , priceProduct , quantity , size , nameProduct} = item
    return (
        <AdminProductCartWrapper>
            <p className='name-product'>
                name: {nameProduct} - color: {colorProduct} - size: {size} - số lượng: {quantity} - 
                giá: <FormatMoney price={parseFloat(priceProduct)} suffixes = "đ" />
            </p>
        </AdminProductCartWrapper>
    )
}

export default memo(ProductItem);
