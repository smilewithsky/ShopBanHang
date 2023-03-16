import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { pageApi } from '../../../../Api';
import AdminPageItem from './AdminPageItem';
import { AdminPageWrapper } from './styled'
import { v4 as uuidv4 } from 'uuid';
import Button from '../../../Common/Button';
import Loading from '../../Common/Loading';

function AdminPage() {
    const [listPage, setListPage] = useState([])
    const [isLoading , setIsLoading] = useState(false)
    const [reload , setReload] = useState()
    const [idEdit , setIdEdit] = useState()
    const formData = {
        type: "",
        page: "",
        title: "",
        imageTitle: "",
        desc: [
            {
                focusText: "",
                text: []
            }
        ]
    }
    const [data, setData] = useState(formData)

    
    useEffect(() => {
        try {
            const fetchData = async () => {
                const res = await axios.get(pageApi);
                if (res.status === 200 || res.status === 201) {
                    console.log("vào đây");
                    setTimeout(() => {
                        setIsLoading(false)
                        setListPage(res.data)
                    }, 1000)
                }
            }
            fetchData()
        } catch (error) {
            setIsLoading(false)
        }
    }, [reload])

    console.log("isLoading ",isLoading);

    const handleEdit = (item) => {
        console.log("item ",item);
        setIdEdit(item.id)
        const listDesc = item.desc.map(item => {
            return {
                focusText: item.focusText,
                text: item.text
            }
        })
        console.log("item ",item);

        setData({
            type: item.type,
            page: item.page,
            title: item.title,
            date: item.date,
            desc: listDesc,
            imageTitle: item.imageTitle ? item.imageTitle : ""
        })
    }
    const handleAdd = () => {
        axios.post(pageApi,data).then(resp => {
            setIsLoading(true)
            setTimeout( () => {
                setIsLoading(false)
                setReload(uuidv4)
            } , 2000 )
        })
    }
    const handleDelete = (id) => {
        console.log("id ",id);
        axios.delete(`${pageApi}/${id}`).then(resp => {
            setIsLoading(true)
            setTimeout( () => {
                setIsLoading(false)
                setReload(uuidv4)
            } , 2000 )
        })
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }

    const handleChangeDesc = (e , index) => {
        const {name , value} = e.target
        const dataDesc = data.desc.map( (item , indexData) => {
            if( indexData === index){
                if(name === "focusText"){
                    return {
                        ...item,
                        focusText: value
                    }
                }
                else{
                    return {
                        ...item ,
                        text: [value]
                    }
                }
            }

            return item
        } );

        setData({
            ...data,
            desc: dataDesc
        })
    }
    const handleEditData = () => {
        axios.put(`${pageApi}/${idEdit}`,data).then(resp => {
            setIsLoading(true)
            setTimeout( () => {
                setIsLoading(false)
                setReload(uuidv4)
            } , 2000 )
        })
    }

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <AdminPageWrapper>
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="">Loại trang</label>
                        <select id="" name="type" value={data.type} onChange={(e) => handleChange(e)}>
                            <option value="footer page">footer page</option>
                            <option value="recruit">tuyển dụng</option>
                            <option value="news">tin tức</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Tên trang web</label>
                        <input type="text" name="page" value={data.page} onChange={(e) => handleChange(e)} />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="">Hình Ảnh Trang Web</label>
                        <input type="text" name="imageTitle" value={data.imageTitle} onChange={(e) => handleChange(e)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Tiêu đề</label>
                        <input type="text" name="title" value={data.title} onChange={(e) => handleChange(e)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Thời gian đăng</label>
                        <input type="text" name="date" value={data.date} onChange={(e) => handleChange(e)} />
                    </div>

                    {
                        data.desc.map((item, index) => {
                            console.log("item1 ",item);

                            if( typeof item === "object" && item.focusText || item.text){
                                return (
                                    <div className="form-group">
                                        <label htmlFor="">Nội dung trang web</label>
                                        <input type="text" name="focusText" value={item.focusText} onChange={(e) => handleChangeDesc(e , index)} style={{marginRight: "1rem"}} />
                                        <input type="text" name="date" value={item.text} onChange={(e) => handleChangeDesc(e , index)} />
                                    </div>
                                )
                            }
                            else return ""
                        })
                    }
                </form>

                <div>
                    <button className='btn btn-add' onClick={handleAdd}>Thêm</button>
                    <button className='btn btn-edit' onClick={handleEditData}>Sửa</button>
                </div>
            </div>

            <ul className='admin-list'>
                <li className='admin-item'>
                    <div className='admin-item__id'>id</div>
                    <div className='admin-item__type'>Loại Trang</div>
                    <div className='admin-item__namePage'>Tên Trạng</div>
                    <div className='admin-item__date'>Ngày Đăng</div>
                    <div className='admin-item__nav'>Điều Hướng</div>
                </li>

                {listPage.map((item, index) => (
                    <AdminPageItem item={item} index={index} handleEdit={handleEdit} handleDelete={handleDelete} />
                ))}
            </ul>
        </AdminPageWrapper>
    )
}

export default AdminPage;
