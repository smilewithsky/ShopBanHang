import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { pageApi } from '../../../Api';
import Breadcrumb from '../Common/Breadcrumb';
import Loading from '../Common/Loading';
import NewsItem from '../Common/NewsPageItem';
import SildeBar from '../Common/SlideBar Blog';
// import NewsItem from './NewsPageItem';
import { NewsWrapper } from './styled'
function News(){
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

    const newsPage = data.filter(dataItem => dataItem.type === "news");
    console.log("newsPage" , newsPage);
    return (
        <NewsWrapper>
            <div className="container">
                <div className="row">
                    <Breadcrumb link="Tin Tức" />
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
        </NewsWrapper>
    )
}

export default News;
