import axios from 'axios';
import React from 'react';
import { productApi } from '../../../../../Api';
import Button from '../../../../Common/Button';
import FormatMoney from '../../../Common/FormatMoney';
import { AdminProductItemWrapper } from './styled'
function AdminItemProduct({ item , index, handleDelete, handleEdit }) {
    return (
        <AdminProductItemWrapper>
            <li className='admin-item'>
                <div className='admin-item__id'>{index}</div>
                <div className='admin-item__type'>{item.typeProduct}</div>
                <div className='admin-item__nameProduct'>{item.nameProduct}</div>
                <div className='admin-item__image'><img src={item.colorProduct[0].image} alt="" /></div>
                <div className='admin-item__price'><FormatMoney price={item.priceProduct} suffixes="đ" /></div>
                <div className='admin-item__price'>{item.saleProduct ? item.saleProduct + "%" : 0 + "%"}</div>
                <div className='admin-item__nav'>
                    <Button className='btn btn-edit' onClick={() => handleEdit(item)} >Sửa</Button>
                    <Button className='btn btn-remove' onClick={() => handleDelete(item.id)}>Xóa</Button>
                </div>
            </li>
        </AdminProductItemWrapper>
    )
}

export default AdminItemProduct;
