import React from 'react';
import { AdminNavWrapper } from './styled'
import { Link } from 'react-router-dom'
import Logo from './../../../assets/Images/tas.png'
function AdminNav({handlePage, handleProduct , handleUser}){
    console.log("handlePage ",handlePage);

    return (
        <AdminNavWrapper>
            <div className="content">
                <div className='content-logo'>
                    <Link to="/" className='logo'>
                        <img src={Logo} alt="" />
                    </Link>
                </div>

                <div className='content-nav-list'>
                    <p onClick={handleUser}>Mua Hàng</p> 
                    <p onClick={handleProduct}>Sản Phẩm</p>
                    <p onClick={handlePage}>Bài Viết</p>
                    <p>Update Ảnh</p>
                </div>
            </div>
        </AdminNavWrapper>
    )
}

export default AdminNav;
