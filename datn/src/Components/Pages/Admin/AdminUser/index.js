import React, { useEffect, useState } from 'react';
import { AdminUserWrapper } from './styled'
import axios from 'axios'
import { userApi } from '../../../../Api';
import { v4 as uuidv4 } from 'uuid';
import AdminUserItem from './AdminUserItem';
import Loading from '../../Common/Loading';
import ListProduct from './AdminUserItem/ListProduct';
function AdminUser() {
    const [listUser, setListUser] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [reload, setReload] = useState([])
    const [currentIndex , setCurrentIndex] = useState()
    const formData = {
        Name: "",
        Email: "",
        StateProduct: "",
        Address: "",
        ListProduct: [],
        PhoneNumber: "",
        Time: "",
    }

    const listProduct = {
        nameProduct: "",
        priceProduct: "",
        quantity: "",
        size: "",
        colorProduc: "",
        idProduct: "",
        imageProduct: "",
        id: "",
        saleProduct: ""
    }

    const [form, setForm] = useState(formData)
    useEffect(() => {
        try {
            const fetchData = async () => {
                const res = await axios.get(userApi)
                if (res.status === 201 || res.status === 200) {
                    setTimeout(() => {
                        setListUser(res.data)
                    })
                }
            }

            fetchData()
        } catch (error) {

        }
    }, [reload])

    const handleDelete = (id) => {
        axios.delete(userApi + "/" + `${id}`)
            .then(res => {
                setIsLoading(true)
                setReload(uuidv4())
                setTimeout(() => {
                    setIsLoading(false)
                    alert("Xóa hóa đơn Thành Công")
                    setForm({
                        Name: "",
                        Email: "",
                        StateProduct: "",
                        Address: "",
                        ListProduct: [],
                        PhoneNumber: "",
                        Time: "",
                    })
                },1500)
    
            })
            .catch(err => {
                alert("Xóa đơn hàng thất bại")
            })
    }
    const handleEdit = (item) => {
        setCurrentIndex(item.id)
        console.log("item", item);
        setForm(item)
    }
    if (isLoading) {
        return <Loading></Loading>
    }

    const handleChangeValue = (e) => {
        const { name , value } = e.target
        console.log("name ",name , value);
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleAdd = () => {
        axios.post(userApi,form).then((resp) => {
            setIsLoading(true)
            setReload(uuidv4())
            setTimeout(() => {
                setIsLoading(false)
                alert("Thêm Hóa Đơn Thành Công")
            },1500)

        })
        .catch((res) => {
            alert("Thêm Hóa Đơn Thất Bại")
        })
    }

    const handleChangeItem = (e , index) => {
        const {value , name} = e.target
        console.log("value ",value);
        console.log("name ",name);

        const data = form.ListProduct.map( ( item , indexMap ) => {
            if(indexMap == index){
                console.log("vào đây");
                return {
                    ...item ,
                    [name]: value
                }
            }
            else{
                return item
            }
        } )


        setForm({
            ...form,
            ListProduct: data
        }
        )

    }

    const handleChangeApi = () => {
        axios.put(`${userApi}/${currentIndex}`,form).then(res => {
            setIsLoading(true)
            setReload(uuidv4())
            setTimeout(() => {
                setIsLoading(false)
                alert("Sửa hóa đơn Thành Công")
                setForm({
                    Name: "",
                    Email: "",
                    StateProduct: "",
                    Address: "",
                    ListProduct: [],
                    PhoneNumber: "",
                    Time: "",
                })
            },1500)

        })
        .catch(err => {
            alert("Sửa đơn hàng thất bại")
        })
    }

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <AdminUserWrapper>
            <div className="form">
                <form action="">
                    <div className="form-group">
                        <label htmlFor="">Tên khách hàng</label>
                        <input type="text" name="Name" value={form.Name} onChange={(e) => handleChangeValue(e)}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email khách hàng</label>
                        <input type="text" name="Email" value={form.Email} onChange={(e) => handleChangeValue(e)}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Điện thoại khách hàng</label>
                        <input type="number" name="PhoneNumber" value={form.PhoneNumber} onChange={(e) => handleChangeValue(e)}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Địa chỉ khách hàng</label>
                        <input type="text" name="Address" value={form.Address} onChange={(e) => handleChangeValue(e)}  />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="">Giỏ hàng</label>
                        <div>
                            {form.ListProduct.map( (itemForm , index) => (
                                <div className='form-group__2'>
                                    <div>
                                        <div className=''>
                                            <label htmlFor="">Tên Sản Phẩm</label>
                                            <input type="text" name="nameProduct" value={itemForm.nameProduct}  onChange={ (e) => handleChangeItem(e , index) }/>
                                        </div>
                                        <div>
                                            <label htmlFor="">Ảnh Sản Phẩm</label>
                                            <input type="text" name="imageProduct" value={itemForm.imageProduct} onChange={ (e) => handleChangeItem(e , index) } />
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <label htmlFor="">Giá Sản Phẩm</label>
                                            <input type="number" name="priceProduct" value={itemForm.priceProduct} onChange={ (e) => handleChangeItem(e , index) } />
                                        </div>
                                        <div>
                                            <label htmlFor="">Số lượng Sản Phẩm</label>
                                            <input type="number" name="saleProduct" value={itemForm.saleProduct} onChange={ (e) => handleChangeItem(e , index) } />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="">Size Sản Phẩm</label>
                                        <input type="text" name="size" value={itemForm.size} onChange={ (e) => handleChangeItem(e , index) } />
                                    </div>
                                </div>
                            ) )}
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Thời gian đặt hàng</label>
                        <input type="text" name="Time" value={form.Time} onChange={(e) => handleChangeValue(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Trạng thái đơn hàng</label>
                        <select id="" name="StateProduct" value={form.StateProduct} onChange={(e) => handleChangeValue(e)} >
                            <option value="Đang giao hàng">Đang vận chuyển</option>
                            <option value="Hoàn tất giao hàng">Hoàn tất giao hàng</option>
                        </select>
                    </div>
                </form>
                <div className='list-button'>
                    <button className='btn btn-add' onClick={handleAdd}>Thêm</button>
                    <button className='btn btn-edit' onClick={handleChangeApi}>Sửa</button>
                </div>
            </div>
            <ul className='admin-list'>
                <li className='admin-item'>
                    <div className='admin-item__id'>id</div>
                    <div className='admin-item__name'>Tên Khác Hàng</div>
                    <div className='admin-item__email'>Email</div>
                    <div className='admin-item__phone'>Số Điện Thoại</div>
                    <div className='admin-item__address'>Địa Chỉ</div>
                    <div className='admin-item__list'>Sản Phẩm</div>
                    <div className='admin-item__time'>Thời Gian Đặt Hàng</div>
                    <div className='admin-item__state'>Trạng Thái</div>
                    <div className='admin-item__nav'>Điều Hướng</div>
                </li>
                {listUser.length ? listUser.map(item => {
                    return (
                        <AdminUserItem key={uuidv4()} handleDelete={handleDelete} handleEdit={handleEdit} item={item} />
                    )
                }) : "Hiện Tại Chưa Có Khách Hàng Nào Cả"}
            </ul>
        </AdminUserWrapper>
    )
}

export default AdminUser;
