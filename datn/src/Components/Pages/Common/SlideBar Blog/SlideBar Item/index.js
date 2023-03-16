import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SideBarItemWrapper } from './styled'
function SideBarItem({data , heading}){
    return (
        <SideBarItemWrapper>
                <div className="item">
                    <div className="sidebar-title">
                        <h3 className='text-center'>
                            {heading}
                            <FontAwesomeIcon icon={faAngleDown} />
                        </h3>
                    </div>

                    <div className='sidebar-list'>
                        {data.map( item => (
                            <div className="sidebar-list__item">
                                <NavLink to={item.link} href="" className='sidebar-list__item-link'>
                                    {item.image ? (<div className='sidebar-list__item-link__image'>
                                        <img className='' src={item.image} alt="" />
                                    </div>) : ""}

                                    <div className='sidebar-list__item-link__content'>
                                        {item.headerLink ? (<h4 className="sidebar-list__item-link-content__title">
                                            {item.headerLink}
                                        </h4>) : ""}
                                        {item.date ? (<p className='sidebar-list__item-link-content__time'>
                                            {item.date}
                                        </p>) : ""}
                                        
                                    </div>
                                </NavLink>
                            </div>
                        ) )}
                    </div>
                </div>
        </SideBarItemWrapper>
    )
}

export default SideBarItem;
