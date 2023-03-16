import React, { useEffect, useRef, useState } from 'react';
import { SideBarWrapper } from './styled'
import { SideBarNews , SideBarProduct } from './data'
import SideBarItem from './SlideBar Item';
import axios from 'axios';
import { pageApi } from '../../../../Api';
function SildeBar(){
    const headerRef = useRef()
    const sideBarRef = useRef()

    const [slidebar , setSlibaBar] = useState([])

    useEffect(() => {
        try {
            const fetchData = async() => {
                const res = await axios.get(pageApi);
                if(res.status === 201 || res.status === 200){
                    setTimeout(() => setSlibaBar(res.data) , 1500)
                }
            }

            fetchData()

        } catch (error) {
            console.log("error ",error);
        }
    }, [])
    return (
        <div className='col-12 col-lg-3 order-2 order-lg-0'>
            <SideBarWrapper>
                <SideBarItem data={SideBarNews} heading="Bài viết mới nhất"></SideBarItem>
                <SideBarItem data={SideBarProduct} heading="DANH MỤC SẢN PHẨM"></SideBarItem>
            </SideBarWrapper>
        </div>
    )
}

export default SildeBar;
