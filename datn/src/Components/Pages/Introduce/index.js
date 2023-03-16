import React, { useEffect, useState } from 'react';
import { memo } from 'react';
import Breadcrumb from '../Common/Breadcrumb';
import Loading from '../Common/Loading';
import SlideBar from '../Common/SlideBar Blog';
import ContentPage from '../FooterPage/Common/Content';
import { IntroduceWrapper } from './styled'
function Introduce(){
    const [loading, setLoading] = useState(false)

    useEffect( () => {
        setLoading(true)

        setTimeout( () => {
            setLoading(false)
        } , 2000)

        return () => {
            
        }
    } , [])

    if(loading){
        return <Loading></Loading>
    }

    return (
        <>
            <IntroduceWrapper>
                <div className="container">
                    <Breadcrumb link="Về thương hiệu thời trang Tiến Anh Shop" />
                    <div className="row">
                        <SlideBar />
                        <ContentPage />
                    </div>
                </div>
            </IntroduceWrapper>
        </>
    )
}

export default memo(Introduce);
