import React, { memo, useEffect, useState } from 'react';
import { useRef } from 'react';
import { SiteWrapper } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { InputWrapper } from '../../../Common/Input/styled';
import SearchItem from './SearchItem';
import axios from 'axios'
import { productApi } from '../../../../Api';
import { v4 as uuidv4 } from 'uuid';
function SiteSearch({setIsOpenSearch , handleCloseSearch}){
    // console.log("search ",document.querySelector(".siteSearch"));

    const [keyWord , setKeyWord] = useState('')
    const [list , setList] = useState([])
    const [listSearch , setListSearch] = useState([])
    function removeAccents(str) {
        var AccentsMap = [
            "aàảãáạăằẳẵắặâầẩẫấậ",
            "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
            "dđ", "DĐ",
            "eèẻẽéẹêềểễếệ",
            "EÈẺẼÉẸÊỀỂỄẾỆ",
            "iìỉĩíị",
            "IÌỈĨÍỊ",
            "oòỏõóọôồổỗốộơờởỡớợ",
            "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
            "uùủũúụưừửữứự",
            "UÙỦŨÚỤƯỪỬỮỨỰ",
            "yỳỷỹýỵ",
            "YỲỶỸÝỴ"
        ];
        for (let i=0; i<AccentsMap.length; i++) {
            let re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
            let char = AccentsMap[i][0];
            str = str.replace(re, char);
        }
        return str;
    }

    useEffect( () => {
        try {
            const fetchData = async() => {
                const res = await axios.get(productApi)
                if(res.status === 200 || res.status === 201){
                    setTimeout( () => {
                        setList(res.data)
                    } , 1500)
                }
            }

            fetchData()
        } catch (error) {
            console.log("lỗi Search" , error);
        }
    } , [])

    useEffect( () => {
        if(keyWord){
            const searchItem = [...list].filter( (itemProduct , index , arr) => {
                // console.log("arr ",arr);
                // console.log("removeAccents(itemProduct.nameProduct) ",removeAccents(itemProduct.nameProduct).toLowerCase());
                return removeAccents(itemProduct.nameProduct).toLowerCase().includes(removeAccents(keyWord).toLowerCase())
            } )
            setListSearch(searchItem)
        }
        else{
            setListSearch([])
        }
    } , [keyWord])

    // console.log("listSearch ",listSearch);

    return (
        <>
            <SiteWrapper className="siteSearch close">
                <div className="site">
                    <div className="site-header">
                        <h3 className="site-title">Tìm Kiếm</h3>
                        <p className='site-close' onClick={handleCloseSearch}>
                            <FontAwesomeIcon icon={faXmark} />
                        </p>
                    </div>
                    <div className="site-content">
                        <InputWrapper value={keyWord} onChange={(e) => setKeyWord(e.target.value)} placeholder='Tìm Kiếm Sản Phẩm' />
                    </div>

                    <div className='list-item'>
                        {listSearch.map( item => <SearchItem handleCloseSearch={handleCloseSearch} item={item} key={uuidv4()}></SearchItem> ) }
                    </div>
                </div>
            </SiteWrapper>
        </>
    )
}

export default memo(SiteSearch);
