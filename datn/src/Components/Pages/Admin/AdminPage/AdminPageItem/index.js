import React from 'react';
import { AdminPageItemWrapper } from './styled'
function AdminPageItem({ item , index , handleEdit , handleDelete}){
    return (
        <AdminPageItemWrapper>
            <li className='admin-item'>
                <div className='admin-item__id'>{index + 1}</div>
                <div className='admin-item__type'>{item.type}</div>
                <div className='admin-item__namePage'>{item.title}</div>
                <div className='admin-item__date'>{item.date}</div>
                <div className='admin-item__nav'>
                    <button className='btn btn-delete' onClick={ () => handleDelete(item.id) }>Xóa bài viết</button>
                    <button className='btn btn-edit' onClick={ () => handleEdit(item)}>Sửa bài viết</button>
                </div>
            </li>
        </AdminPageItemWrapper>
    )
}

export default AdminPageItem;
