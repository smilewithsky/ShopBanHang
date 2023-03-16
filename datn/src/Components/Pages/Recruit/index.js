import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { pageApi } from '../../../Api';
import Breadcrumb from '../Common/Breadcrumb';
import Loading from '../Common/Loading';
import NewsItem from '../Common/NewsPageItem';
import SildeBar from '../Common/SlideBar Blog';
import { HeaderWrapper } from './styled';
function Recruit(){
    const [isLoading , setIsLoading] = useState(false)
    const [data , setData] = useState([])
    useEffect( () => {
        setIsLoading(true)

        try {
          const fetchData = async() => {
            const res = await axios.get(pageApi)
            if(res.status === 201 || res.status === 200){
                setTimeout( () => {
                    setData(res.data)
                    setIsLoading(false)
                } , 1500)
            }
          } 
          
          fetchData()
        } catch (error) {
            console.log("error ",error);
        }
    } , [])

    if(isLoading){
        return <Loading />
    }

    const newsPage = data.filter(dataItem => dataItem.type === "recruit" );
    console.log("newsPage" , newsPage);
    return (
        <HeaderWrapper>
            <div className="container">
                <div className="row">
                    <Breadcrumb link="Tuyển Dụng" />
                </div>

                <div className="row">
                    <SildeBar />

                    <div className="col-12 col-lg-9">
                        {
                            newsPage.map( (item , index) => 
                            (
                                <NewsItem item={item} />
                            ) 
                            )
                        }
                    </div>
                </div>
            </div>
        </HeaderWrapper>
    )
}

export default Recruit;
