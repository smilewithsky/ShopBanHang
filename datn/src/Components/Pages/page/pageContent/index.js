import React from 'react';
import { PageContentWrapper } from './styled'
function PageContent({pageItem}){
    return (
        <PageContentWrapper>
            <div className='page-item' >
                <div className='page-description'>
                    <h3 className='page-item__news'>
                        {pageItem.imageTitlePage ? <img className='page-item__news-image' src={pageItem.imageTitlePage} alt="" /> : ""}
                        {pageItem.focusText}
                    </h3>

                    {pageItem.imageShow ? <img className='page-item__news-show' src={pageItem.imageShow} alt="" /> : ""}

                    <div>
                        {pageItem.text.map((textItem , index) => (<div><p key={`text-key-${index}`} className='page-text'>{textItem}</p></div>))}
                    </div>
                </div>
            </div>
        </PageContentWrapper>
    )
}

export default PageContent;
