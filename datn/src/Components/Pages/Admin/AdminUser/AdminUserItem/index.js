import React from 'react';
import Button from '../../../../Common/Button';
import FormatMoney from '../../../Common/FormatMoney';
import ListProduct from './ListProduct';
import { AdminUserItemWrapper } from './styled'
function AdminUserItem({item , handleDelete , handleEdit}){
    return (
        <AdminUserItemWrapper>
            <li className='admin-item'>
                <div className='admin-item__id'>{item.id}</div>
                <div className='admin-item__name'>{item.Name}</div>
                <div className='admin-item__email'>{item.Email}</div>
                <div className='admin-item__phone'>{item.PhoneNumber}</div>
                <div className='admin-item__address'>{item.Address}</div>
                <div className='admin-item__list'><ListProduct item={item.ListProduct} /></div>
                <div className='admin-item__time'>{item.Time}</div>
                <div className='admin-item__time'>{item.StateProduct}</div>
                <div className='admin-item__nav'>
                    <Button className='btn btn-edit' onClick={() => handleEdit(item)}>Sửa</Button>
                    <Button className='btn btn-remove' onClick={()=> handleDelete(item.id)}>Xóa</Button>
                </div>
            </li>
        </AdminUserItemWrapper>
    )
}

export default AdminUserItem;
