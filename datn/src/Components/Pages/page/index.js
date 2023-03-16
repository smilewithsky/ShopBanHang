import React, { useEffect, useState } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import SildeBar from '../Common/SlideBar Blog';
import { PageWrapper } from './styled'
import axios from 'axios'
import { pageApi } from '../../../Api';
import { parsePath } from 'react-router';
import Loading from '../Common/Loading';
import { useParams } from 'react-router-dom';
import PageContent from './pageContent';

function Page() {
    const [pageContent, setPageContent] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const params = useParams()
    useEffect(() => {
        setIsLoading(true)
        try {
            const fetchData = async () => {
                const resPage = await axios.get(pageApi)
                if (resPage.status === 201 || resPage.status === 200) {
                    setTimeout(() => {
                        setPageContent(resPage.data);
                        setIsLoading(false)
                    }, 1500)
                }
            }
            fetchData()
        } catch (error) {
            console.log("error", error);
        }


        return () => {
        }
    }, [])

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
        for (let i = 0; i < AccentsMap.length; i++) {
            let re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
            let char = AccentsMap[i][0];
            str = str.replace(re, char);
        }
        return str;
    }
    useEffect(() => {
        window.scrollTo(0, 0)
        
        return () => {

        }
    })

    console.log("param" , params);


    let filterData = pageContent.find(item => {
        console.log("item ",item);
        return removeAccents(item.title).toLowerCase() === removeAccents(params.namepage).toLowerCase() || removeAccents(item.page).toLowerCase() === removeAccents(params.namepage).toLowerCase()
    })
    console.log("filterData" , filterData);

    if(isLoading){
        return <Loading />
    }

    return (
        <PageWrapper>
            {filterData ? <div className='container'>
                <div className="row">
                    <Breadcrumb link={filterData.page} />
                </div>
                <div className="row">
                    <SildeBar />
                    <div className="col-12 col-sm-12 col-md-12 col-lg-9 order-0">
                        <div>
                            <h3 className='page-name'>
                                {filterData.title} <br /> <span className='page-date'>ngày đăng {filterData.date}</span>
                            </h3>
                            <p className='page-content'>
                                {filterData.content}
                            </p>
                            {filterData.imageTitle ? <img className='image-page' src={filterData.imageTitle} alt="" /> : ""}
                        </div>
                        <div className='page-description'>
                            {filterData.desc.map((pageItem, index) => (
                                <PageContent pageItem={pageItem} key={`item-page-${index}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div> : (<div>
                <img src="https://bizflyportal.mediacdn.vn/bizflyportal/459/347/2020/06/02/17/37/70515910726734841.jpg" alt="" />
            </div>)}
        </PageWrapper>
    )
}

export default Page;
