import React, { memo, useRef, useState } from 'react'
import { HeaderWrapper, Site } from './styled'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import logo from './../assets/Images/tas.png'
import { InputWrapper } from '../Common/Input/styled'
import HeaderLogo from './HeaderLogo'
import HeaderIcon from './HeaderIcon'
import HeaderMenu from './HeaderMenu'
import { MenuProduct , sale } from './data'
import SiteCart from './Site/SiteCart'
import SiteSearch from './Site/SiteSearch'
import SiteMenu from './Site/SiteMenu'
import { useNavigate } from 'react-router-dom'
function Header() {
    const [ isOpenCart , setIsOpenCart ] = useState(false)
    const [ isOpenSearch , setIsOpenSearch ] = useState(false)
    const [ isOpenMenu , setIsOpenMenu ] = useState(false)

    let navigate = useNavigate();
    console.log("header re-render");
    const [searchInput , setSearchInput] = useState()

    const handleOpenSearch = () => {
        setIsOpenSearch(true)
    }

    const handleCloseSearch = () => {
        setIsOpenSearch(false)
    }

    const handleOpenCart = () => {
        setIsOpenCart(true)
    }

    const handleCloseCart = () => {
        setIsOpenCart(false)
    }

    const handleOpenMenu = () => {
        setIsOpenMenu(true)
    }

    const handleCloseMenu  = () => {
        setIsOpenMenu(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(searchInput){
            setSearchInput("")
            navigate(`/product/${searchInput}`)
        }
    }
    return (
        <>
            <HeaderWrapper>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-4 col-lg-3">
                            <HeaderLogo width="8rem" src={logo} small="4rem"></HeaderLogo>
                        </div>
                        <div className="col-6 col-lg-0">
                            <div className="header-search">
                                <form action="" onSubmit={ (e) => handleSubmit(e)} >
                                    <InputWrapper placeholder='Tìm Kiếm Sản Phẩm' className='input input-overwrite' value={searchInput} onChange={e => setSearchInput(e.target.value)}  />
                                </form>
                                {/* <FontAwesomeIcon icon={faCoffee} /> */}
                            </div>
                        </div>
                        <div className="col-8 col-lg-3 justify-content-right">
                            <HeaderIcon handleOpenCart={handleOpenCart} handleOpenSearch={handleOpenSearch} handleOpenMenu={handleOpenMenu}/>
                        </div>
                    </div>
                    <HeaderMenu data={MenuProduct} sale = {sale} handleOpenCart={handleOpenCart} handleOpenSearch={handleOpenSearch} handleOpenMenu={handleOpenMenu}/>
                </div>
            </HeaderWrapper>
            <Site>
                { isOpenCart && <SiteCart setIsOpenCart={setIsOpenCart} handleCloseCart={handleCloseCart} ></SiteCart> }
                { isOpenSearch && <SiteSearch setIsOpenSearch={setIsOpenSearch} handleCloseSearch={handleCloseSearch}  ></SiteSearch> }
                { isOpenMenu && <SiteMenu data={MenuProduct} setIsOpenMenu={setIsOpenMenu} handleCloseMenu={handleCloseMenu} ></SiteMenu> }
            </Site>
        </>
    )
}

export default memo(Header)