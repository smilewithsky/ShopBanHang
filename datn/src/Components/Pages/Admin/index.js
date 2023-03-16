import React, { useState } from 'react';
import { AdminWrapper } from './styled'
import Axios from 'axios'
import AdminImagePage from './AdminImage';
import AdminNav from './AdminNavigation';
import AdminProduct from './AdminProduct';
import AdminPage from './AdminPage';
import AdminUser from './AdminUser';
function Admin(){
    const [page , setPage] = useState(false)
    const [product , setProduct] = useState(true)
    const [ user , setUser ] = useState(false)

    const handlePage = () => {
        setPage(true)
        setProduct(false)
        setUser(false)
    }
    const handleProduct = () => {
        setPage(false)
        setProduct(true)
        setUser(false)
    }
    const handleUser = () => {
        setPage(false)
        setProduct(false)
        setUser(true)
    }

    return (
        <AdminWrapper>
            <div className="row">
                <div className="col-12 col-lg-12">
                    <AdminNav handlePage={handlePage} handleProduct={handleProduct} handleUser={handleUser}  />
                </div>

                <div className='col-12 col-lg-12'>
                    {page && <AdminPage />}
                    {product && <AdminProduct />}
                    {user && <AdminUser />}
                </div>
            </div>
        </AdminWrapper>
    )
}

export default Admin;
