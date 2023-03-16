import React, { memo, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import HeaderLogo from '../HeaderLogo'
import { HeaderMenuWrapper } from './styled'
import logo from './../../assets/Images/tas.png'
import HeaderIcon from '../HeaderIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
function HeaderMenu({data , handleOpenCart , handleOpenSearch , handleOpenMenu}) {
    const [show, setShow] = useState(false);
    const isFix = useRef()
    useEffect( () => {
        // console.log("isFix");
        const handleScroll = () => {
            if(window.scrollY > 130){
                setShow(true)
                isFix.current.classList.add('fixed')
                isFix.current.style.background = "white"
            }
            else{
                setShow(false)
                isFix.current.classList.remove('fixed');
            }
        }

        window.addEventListener("scroll" , handleScroll)

        return ()=> {
            window.removeEventListener("scroll" ,handleScroll)
        }
    } , [])


    return (
        <HeaderMenuWrapper>
            <div className="row align-items-center" ref={isFix}>
                <div className="col-3 col-sm-6 col-lg-3">
                    {show && <HeaderLogo src={logo} width="10rem" />}
                </div>
                <div className="col-0 col-lg-6">
                    <ul className='menu-list'>
                        <li className='menu-item'>
                            <NavLink className='menu-item__link' to="/introduce">Giới Thiệu</NavLink>
                        </li>
                        <li className='menu-item'>
                            <NavLink className='menu-item__link' to="/product">Sản Phẩm</NavLink>
                            <div className='submenu'>
                                <div className="container">
                                    <div className="row">
                                        {data.map( (item , index) => (
                                            <div key={`submenu-${index}`} className="col-3">
                                                <div className="submenu-item">
                                                    <h3 className="submenu-item__header">
                                                        <NavLink to="" className='submenu-item__header-link'>
                                                            {item.name}
                                                        </NavLink>
                                                    </h3>
                                                    <ul className='submenu-item-list'>
                                                        {item.text.map( (subitem , index) => (
                                                            <li key={`subMenuItem-${index}`} className='submenu-item-list__item'>
                                                                <NavLink to="" className='submenu-item-list__item-link'>
                                                                    <FontAwesomeIcon icon={faAngleRight} />
                                                                    <span>
                                                                        {subitem}
                                                                    </span>
                                                                </NavLink>
                                                            </li>
                                                        ) )}
                                                    </ul>
                                                </div>
                                            </div>
                                        ) )}
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='menu-item'>
                            <NavLink className='menu-item__link' to="/news">Tin Tức</NavLink>
                        </li>
                        <li className='menu-item'>
                            <NavLink className='menu-item__link' to="/recruit">Tuyển Dụng</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col-9 col-sm-6 col-lg-3">
                    {show && <HeaderIcon handleOpenCart={handleOpenCart} handleOpenSearch={handleOpenSearch} handleOpenMenu={handleOpenMenu}/>}
                </div>
            </div>
        </HeaderMenuWrapper>
    )
}

export default memo(HeaderMenu)