import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo, useRef } from 'react';
import Button from '../../../Common/Button';
import { SiteWrapper } from './styled'
import { NavLink } from 'react-router-dom'
function SiteMenu({handleCloseMenu}){
    return (
        <>
            <SiteWrapper className="siteMenu close" >
                <div className="site">
                    <div className="site-header">
                        <h3 className="site-title">Menu</h3>
                        <p className='site-close' onClick={handleCloseMenu}>
                            <FontAwesomeIcon icon={faXmark} />
                        </p>
                    </div>
                    <div className="site-content">
                        <ul className='site-content__list'>
                            <li className='site-content__item' onClick={handleCloseMenu}>
                                <NavLink to="/introduce" className='site-content__item-link'>Giới Thiệu</NavLink>
                            </li>
                            <li className='site-content__item' onClick={handleCloseMenu}>
                                <NavLink to="/product" className='site-content__item-link'>Sản Phẩm</NavLink>
                            </li>
                            <li className='site-content__item' onClick={handleCloseMenu}>
                                <NavLink to="/news" className='site-content__item-link'>Tin Tức</NavLink>
                            </li>
                            <li className='site-content__item' onClick={handleCloseMenu}>
                                <NavLink to="/recruit" className='site-content__item-link'>Tuyển Dụng </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </SiteWrapper>
        </>
    )
}

export default memo(SiteMenu);
