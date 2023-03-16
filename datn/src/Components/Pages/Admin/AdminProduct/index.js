import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { productApi } from '../../../../Api';
import AdminItemProduct from './AdminItemProduct';
import FormAdminProduct from './FormAdminProduct';
import { AdminProductWrapper } from './styled'
import { v4 as uuidv4 } from 'uuid'
import Loading from '../../Common/Loading';
function AdminProduct() {
    const [listProduct, setListProduct] = useState([])
    const [isLoading, setIsloading] = useState(false)
    const [currentIndex, setCurrentIndex] = useState()
    const [reload, setReload] = useState()

    const formData = {
        nameProduct: "",
        priceProduct: "",
        colorProduct: [],
        descriptionProduct: [],
        saleProduct: "",
        typeProduct: [],
        ratingProduct: ""
    }

    const listColor = [

    ]

    const colorItem = {

    }


    const [form, setForm] = useState(formData)
    console.log("form ", form);

    useEffect(() => {
        try {
            const fetchData = async () => {
                const res = await axios.get(productApi)
                if (res.status === 200 || res.status === 201) {
                    setTimeout(() => {
                        setListProduct(res.data)
                    }, 2500)
                }
            }

            fetchData()
        } catch (error) {
            console.log("errror Admin ", error);
        }
    }, [reload])

    console.log("currentIndex", currentIndex);

    const handleChange = (e) => {
        window.scrollTo(0, 0)

        const { value, name } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }
    const handleAddProduct = () => {
        axios.post(productApi, form).then(() => {
            setReload(uuidv4())
            setIsloading(true)
            setTimeout(() => {
                setIsloading(false)
                alert("Thêm Sản Phẩm thành công")
                setForm(formData)
            }, 1500)
        })
            .catch(() => {
                alert("Thêm sản phẩm thất bại")
            })
    }
    const handleChangeProduct = () => {
        axios.put(`${productApi}/${currentIndex}`, form)
            .then(async (resp) => {
                setIsloading(true)
                setTimeout(() => {
                    setIsloading(false)
                    setForm(formData)
                }, 1500)
            })
            .catch(() => {
                alert("Sửa thất bại")
            })
    }

    const handleDelete = (id) => {
        axios.delete(productApi + "/" + `${id}`)
            .then(res => {
                setIsloading(true)
                setTimeout(() => {
                    setIsloading(false)
                    alert("xóa thành công");
                    const newList = [...listProduct].filter(item => item.id !== id);
                    setListProduct(newList);
                    setForm(formData)
                }, 1500)
            })
            .catch(err => {
                alert("xóa sản phẩm thất bại")
            })
    }

    const handleEdit = (item) => {
        const id = item.id
        setCurrentIndex(id)
        setForm(item)
    }

    if (isLoading) {
        return (
            <Loading></Loading>
        )
    }

    const handleChangeColor = (e, index, item) => {
        const { name, value } = e.target
        console.log("item1 ", item);
        const form = {

        }
    }

    const handleChangeSize = (e, index) => {
        const { name, value } = e.target
        console.log("index", index);
        console.log("value ", value);
    }

    return (
        <AdminProductWrapper>
            <div className="form">
                <form action="">
                    <div className="form-group">
                        <label htmlFor="">Loại Sản Phẩm</label>
                        <select id="" name="typeProduct" value={form.typeProduct} onChange={(e) => handleChange(e)}>
                            <option value="Áo Nam">
                                Áo Nam
                            </option>
                            <option value="Quần Nam">
                                Quần Nam
                            </option>
                            <option value="Mũ Nam">
                                Mũ Nam
                            </option>
                            <option value="Giày Nam">
                                Giày Nam
                            </option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Tên sản phâm</label>
                        <input onChange={(e) => handleChange(e)} type="text" name="nameProduct" value={form.nameProduct} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Màu sản phẩm</label>
                        <div className="color-form">
                            {
                                form.colorProduct.map((item, index) => {
                                    if (typeof item === "object") {
                                        return (
                                            <div className='form-group__2'>
                                                <label htmlFor="">Màu sản phẩm</label>
                                                <div className='container-color'>
                                                    <input onChange={(e) => handleChangeColor(e, index, item)} type="text" placeholder='màu sản phẩm' name="image" value={item.image} />
                                                    <input onChange={(e) => handleChangeColor(e, index)} type="text" placeholder='ảnh sản phẩm' name="color" value={item.color} />
                                                </div>
                                                <div className="container-size">
                                                    {item.size.map((itemSize, indexSize) => {
                                                        if (typeof itemSize === "object") {
                                                            return (
                                                                <>
                                                                    <label htmlFor="">Size</label>
                                                                    <div className='container-size__input'>
                                                                        <input onChange={(e) => handleChangeSize(e, indexSize)} type="text" name="size" placeholder='size' value={itemSize.text} />
                                                                        <input onChange={(e) => handleChangeSize(e, indexSize)} type="text" name="quantity" placeholder='quantity' value={itemSize.quantity} />
                                                                    </div>
                                                                </>
                                                            )
                                                        }
                                                        else {
                                                            return ""
                                                        }
                                                    })}
                                                </div>
                                            </div>
                                        )
                                    }
                                    else {
                                        return ""
                                    }
                                })
                            }
                        </div>
                    </div>


                    <div className="form-group">
                        <label htmlFor="">Sản phẩm giảm giá</label>
                        <input onChange={(e) => handleChange(e)} type="text" name="saleProduct" value={form.saleProduct} />
                    </div>
                    <div className='description'>
                        <label htmlFor="">Miêu tả sản phâm</label>
                        {form.descriptionProduct.map((item, index) => {
                            if (typeof item === "object") {
                                return (
                                    <div className="form-group">
                                        <label htmlFor="">Miêu tả</label>
                                        <>
                                            <input onChange={(e) => handleChange(e)} type="text" name="saleProduct" value={item.headerText} placeholder="headerText" />
                                            <input onChange={(e) => handleChange(e)} type="text" name="saleProduct" value={item.descriptionText} placeholder="descriptionText" />
                                        </>
                                    </div>
                                )
                            }
                            else return ""
                        })}
                    </div>
                </form>

                <div className='list-button'>
                    <button className='btn btn-add' onClick={handleAddProduct} >Thêm</button>
                    <button className='btn btn-edit' onClick={handleChangeProduct} >Sửa</button>
                </div>
            </div>


            <ul className='admin-list'>
                <li className='admin-item'>
                    <div className='admin-item__id'>id</div>
                    <div className='admin-item__type'>kiểu sản phẩm</div>
                    <div className='admin-item__nameProduct'>Tên Sản Phẩm</div>
                    <div className='admin-item__image'>Ảnh</div>
                    <div className='admin-item__price'>Giá</div>
                    <div className='admin-item__sale'>Giảm Giá</div>
                    <div className='admin-item__nav'>Điều Hướng</div>
                </li>
                {listProduct.length ? listProduct.map((item , index) => {
                    return (
                        <AdminItemProduct key={uuidv4()} handleDelete={handleDelete} item={item} index={index} handleEdit={handleEdit} />
                    )
                }) : "Loading"}
            </ul>
        </AdminProductWrapper>
    )
}

export default AdminProduct;