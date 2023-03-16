import React from 'react';
import { NavLink } from 'react-router-dom';
import { NewsItemWrapper } from './styled'
function NewsItem({item}){
    return (
        <NewsItemWrapper>
            <NavLink to={`/page/${item.title}`} className='newsPage-item'>
                <img className='item-image' src={item.imageTitle} alt="" />
                <div className='item-content'>
                    <h3 className='item-content__title'>
                        {item.title}
                    </h3>
                    <p className='item-content__date'>
                        {item.date}
                    </p>
                    <p className='item-content__desc'>
                        {item.content}
                    </p>
                </div>
            </NavLink>
        </NewsItemWrapper>
    )
}

export default NewsItem;
