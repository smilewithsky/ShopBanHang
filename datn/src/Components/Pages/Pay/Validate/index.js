import React, { memo, useEffect, useRef, useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import Button from '../../../Common/Button';
import { ValidateWrapper } from './styled';
import uniqBy from "lodash/uniqBy";
import dropRight from "lodash/dropRight";
import { forEach } from 'lodash';
import axios from 'axios'
import { cartApi, productApi, userApi } from '../../../../Api';
import check from './check';

function Validate({ payList, products }) {
    const [info, setInfo] = useState(
        {
            Name: "",
            Email: "",
            Address: "",
            Phone: ""
        }
    )
    let navigate = useNavigate();
    const handleChangeValue = (e) => {
        const { name, value } = e.target;
        setInfo({
            ...info,
            [name]: value
        })
    }

    let today = new Date();
    let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;
    const formInfoRef = useRef()
    const Validate = () => {
        const listInfo = document.querySelectorAll(".input-info");
        if (listInfo) {
            for (let index = 0; index < listInfo.length; index++) {
                const itemInfoElement = listInfo[index];
                itemInfoElement.addEventListener("blur", function () {
                    const parentElement = itemInfoElement.parentElement;
                    const errorElement = parentElement.querySelector(".error-message");
                    const typeInput = itemInfoElement.name;
                    if (itemInfoElement.value.length) {
                        check(typeInput , itemInfoElement , errorElement)
                    }
                    else {
                        errorElement.innerText = "Vui Lòng Nhập Trường Này"
                    }
                })

                itemInfoElement.addEventListener("input ", function () {

                })
            }
        }
    }
    Validate()
    let isValid = true
    const listError = document.querySelectorAll(".error-message");
    listError.forEach(item => {
        if (item.innerText !== "") {
            isValid = false
        }
        else {
            isValid = true
        }
    })

    const handleSubmit = async(e) => {
        e.preventDefault();
        const listProduct = [...products]
        const listPayList = [...payList]

        if(listPayList.length){
            if (isValid && info.Name !== "" && info.Address !== "" && info.Email !== 0 && info.Phone !== "") {
                const filterListProduct = listProduct.filter(itemProduct => {
                    for (let index = 0; index < listPayList.length; index++) {
                        const element = listPayList[index];
                        if (itemProduct.id === element.idProduct) {
                            return element
                        }
                    }
                })
                const mapListProduct = filterListProduct.map(itemProduct => {
                    for (let index = 0; index < listPayList.length; index++) {
                        const elementPayList = listPayList[index];
                        console.log("index", index);
                        if (elementPayList.idProduct === itemProduct.id) {
                            const colorProduct = itemProduct.colorProduct;
                            const mapColorProduct = colorProduct.map(itemColor => {
                                if (itemColor.color === elementPayList.colorProduct) {
                                    const listSize = itemColor.size;
                                    const mapListSize = listSize.map(item => {
                                        console.log("item ", elementPayList.size);
                                        if (item.text === elementPayList.size) {
                                            return { ...item, quantity: item.quantity - elementPayList.quantity }
                                        }
                                        else {
                                            return item
                                        }
                                    })
                                    return { ...itemColor, size: mapListSize }
                                }
                                else {
                                    return itemColor
                                }
                            })
                            return { ...itemProduct, colorProduct: mapColorProduct }
                        }
                    }
                    return itemProduct
                })
    
                mapListProduct.forEach(async(item, index) => {
                    await axios.put(productApi + "/" + item.id, item)
                        .then(item => {
                            console.log("Success");
                        })
                        .catch(item => {
                            alert("Sửa Thất Bại")
                        })
                })
    
                const postData = {
                    Name: info.Name,
                    Email: info.Email,
                    PhoneNumber: info.Phone,
                    Address: info.Address,
                    StateProduct: "Đang Vận Chuyển",
                    ListProduct: listPayList,
                    Time: dateTime
                }
    
                await axios.post(userApi , postData)
                    .then(item => {
                        console.log("Thêm Thành Công ",item);
                    })
                    .catch(error => {
                        console.log("Thêm Thất Bại ",error);
                    })
                    
                const Delete = async() => {
                    let isSuccess = false
                    listPayList.forEach(async (item) => {
                        await axios.delete(cartApi + "/" + item.id)
                            .then((item) => {
                                isSuccess = true
                            })
                            .catch(err => {
                                alert(`Sửa Thất Bại ${err}`)
                            })
                    })

                    await setTimeout( () => {
                        console.log("isSuccess ",isSuccess);
                        if(isSuccess){
                            
                        }
                    } , 5000)
                }
                await Delete()
                setTimeout(() => {
                    alert("Mua Hàng Thành Công")
                    navigate('/product')
                } ,2000)
                
            }
            else{
                alert("Bạn Vui Lòng Nhập Thông Tin Vào Form")
            }
        }
        else{
            alert("Bạn Vui Lòng Mua Hàng Trước Khi Thanh Toán");
        }
    }

    return (
        <ValidateWrapper>
            <form className='form-info' ref={formInfoRef} onSubmit={(e) => handleSubmit(e)} >
                <h3>Thông Tin Thanh Toán</h3>
                <div className="form-group">
                    <label htmlFor="Name">Họ và tên</label> <br />
                    <input type="text" id="Name" name="Name" placeholder='Họ và Tên' value={info.Name} onChange={(e) => handleChangeValue(e)} className='input-info' />
                    <p className='error-message'></p>
                </div>
                <div className="form-group">
                    <label htmlFor="Email">Email</label> <br />
                    <input type="text" id="c" name="Email" placeholder='Email' value={info.Email} onChange={(e) => handleChangeValue(e)} className='input-info' />
                    <p className='error-message'></p>
                </div>
                <div className="form-group">
                    <label htmlFor="Phone">Số điện thoại</label> <br />
                    <input type="number" id="Phone" name="Phone" placeholder='Số điện thoại' value={info.Phone} onChange={(e) => handleChangeValue(e)} className='input-info' />
                    <p className='error-message'></p>
                </div>
                <div className="form-group">
                    <label htmlFor="Address">Địa Chỉ</label> <br />
                    <input type="text" id="Address" name="Address" placeholder='Địa chỉ' value={info.Address} onChange={(e) => handleChangeValue(e)} className='input-info' />
                    <p className='error-message'></p>
                </div>
                <p className='ship'>Phí Ship 20k tính theo từng địa chỉ</p>
                <div className="form-group form-group__submit">
                    <Button>
                        <Link to="/cart">Giỏ Hàng</Link>
                    </Button>
                    <Button>Hoàn Tất Thanh Toán</Button>
                </div>
            </form>
        </ValidateWrapper>
    )
}

export default memo(Validate);
