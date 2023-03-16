import React, { memo } from 'react';
import { Link } from 'react-router-dom'
import { HeaderIconWrapper } from './styled'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser , faMagnifyingGlass , faCartShopping} from '@fortawesome/free-solid-svg-icons'
function HeaderIcon({handleOpenCart , handleOpenSearch , handleOpenMenu}){
    return (
        <HeaderIconWrapper>
            <ul className='list'>
                <li className='list-item'>
                    <Link to="/login" className='list-item__link'>
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                </li>
                <li className='list-item'>
                    <p className='list-item__link' onClick={handleOpenSearch}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </p>
                </li>
                <li className='list-item' onClick={handleOpenCart}>
                    <p className='list-item__link list-item__button list-item-cart'>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </p>
                </li>
                <li className='list-item list-item-md'>
                    <p className='list-item__link list-item__button list-item-menu' onClick={handleOpenMenu}>
                        MENU
                    </p>
                </li>
            </ul>
        </HeaderIconWrapper>
    )
}

export default memo(HeaderIcon);
