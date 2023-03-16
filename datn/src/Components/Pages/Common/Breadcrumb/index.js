import React from 'react';
import { BreadCrumbWrapper } from './styled'
function Breadcrumb({link}){
    return (
        <BreadCrumbWrapper>
            <div className="row">
                <div className="col-12">
                    <nav aria-label="Page breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">Trang Chủ</li>
                            <li className="breadcrumb-item">{link ? link : ""}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </BreadCrumbWrapper>
    )
}

export default Breadcrumb;
