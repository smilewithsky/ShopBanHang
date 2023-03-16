import React, { useEffect, useState } from 'react';
import Button from '../../../../Common/Button';
import { FormAdminProductWrapper } from './styled'
import { v4 as uuidv4 } from 'uuid';
function FormAdminProduct(){
    const [info , setInfo] = useState({
        Name: "",
        Price: "",
        Type: "",
        Desc: "",
    })
    const [description , setDescription] = useState([1])
    const [size , setSize] = useState([1])
    const [color , setColor] = useState([1])

    useEffect( () => {
        document.querySelector(".form-admin__product").addEventListener("submit" , function(e){
            e.preventDefault()
        })
    } , [] )

    const handleAddDescription = (index) => {
        setDescription( prev => {
            return [...prev , index]
        } )
    }
    const handleSubDescription = (index) => {
        setDescription( prev => {
            return [...prev].filter( (item , indexItem) => {
                return indexItem !== index
            } )
        } )
    }
    const handleAddSize = (index) => {
        setSize( prev => {
            return [...prev , index]
        } )
    }

    const handleSubSize = (index) => {
        setSize( prev => {
            return [...prev].filter( (item , indexItem) => {
                return indexItem !== index
            } )
        } )
    }

    const handleAddColor = (index) => {
        setColor( prev => {
            return [...prev , index]
        } )
    }

    const handleSubColor = (index) => {
        setColor( prev => {
            return [...prev].filter( (item , indexItem) => {
                return indexItem !== index
            } )
        } )
    }

    return (
        <FormAdminProductWrapper>
            <form className='form-admin__product'>
                <div className="form-group">
                    <label htmlFor="">Loại Sản Phẩm</label>
                    <select name="" id="">
                        <option value="Áo Nam">Áo Nam</option>
                        <option value="Quần Nam">Quần Nam</option>
                        <option value="Mũ Nam">Mũ Nam</option>
                        <option value="Giày Nam">Giày Nam</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Tên Sản Phẩm</label>
                    <input type="text" id='name' placeholder='Tên Sản Phẩm' />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Giá Sản Phẩm</label>
                    <input type="text" id='price' placeholder='Giá Sản Phẩm' />
                </div>
                <div className="form-group">
                    <label htmlFor="sale">Giảm Giá</label>
                    <input type="text" id='sale' placeholder='Giảm Giá' />
                </div>

                {description.map( (itemDesc , index) => (
                    <div className="form-group" key={uuidv4()}>
                        <div className='title'>
                            <label htmlFor="sale">Miêu Tả </label> 
                            <div className='list-btn'>
                                <button className='subtract' onClick={() =>handleSubDescription(index)}>-</button>
                                <button className='plus' onClick={() =>handleAddDescription(index)}>+</button>
                            </div>
                        </div>
                        <input type="text" id='sale' className={`description description-${index}`} placeholder='Miêu Tả' /> 
                        <input type="text" id='sale' className={`content content-${index}`} placeholder='Nội Dung' />
                    </div>
                ) )}

                {color.map( (item , indexColor) => (
                    <div className="form-group" key={uuidv4()}>
                        <div className='title'>
                            <label htmlFor="sale">Màu Sắc</label>
                            <div className='list-btn'>
                                <button className='subtract' onClick={() =>handleSubColor(indexColor)}>-</button>
                                <button className='plus' onClick={() =>handleAddColor(indexColor)}>+</button>
                            </div>
                        </div>
                        
                        <input type="text" id='sale' placeholder='Màu Sản Phẩm' />
                        <input type="text" id='sale' placeholder='Ảnh Sản Phẩm' />
                            {size.map( (itemDesc , index) => (
                            <div className="form-group" key={uuidv4()}>
                                <div className='title'>
                                    <label htmlFor="sale">Size</label>
                                    <div className='list-btn'>
                                        <button className='subtract' onClick={() =>handleSubSize(index)}>-</button>
                                        <button className='plus' onClick={() =>handleAddSize(index)}>+</button>
                                    </div>
                                </div>
                                <input type="text" id='' placeholder='Cỡ Sản Phẩm' />
                                <input type="text" id='' placeholder='Số Lượng Sản Phẩm' />
                            </div>
                        ) )}
                    </div>
                ) )}
            </form>
            <div className=''>
                <button className='btn btn-add'>Thêm Sản Phẩm</button>
                <button className='btn btn-edit'>Sửa Sản Phẩm</button>
            </div>
        </FormAdminProductWrapper>
    )
}

export default FormAdminProduct;
