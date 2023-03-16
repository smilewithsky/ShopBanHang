import React, { useRef ,useEffect, memo } from 'react';
import { SiteWrapper } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { InputWrapper } from '../../../Common/Input/styled';
import { useState } from 'react';
import Button from '../../../Common/Button';
import ListProduct from './ListProduct';
import { NavLink } from 'react-router-dom'
function SiteCart({isOpenCart , setIsOpenCart , handleCloseCart}){
    // console.log("isOpen" , isOpenCart);
    const [isLoading , setIsLoading] = useState(false)
    const siteRef = useRef();
    return (
        <>
            <SiteWrapper ref={siteRef} className="siteCart" >
                <div className="site">
                    <div className="site-header">
                        <h3 className="site-title">Giỏ Hàng</h3>
                        <p className='site-close' onClick={handleCloseCart}>
                            <FontAwesomeIcon icon={faXmark} />
                        </p>
                    </div>
                    <div className="site-content">
                        {isLoading && <div className='loading'>
                            <div className='item-loading'>
                                Loading ...
                            </div>
                        </div>}
                        <ListProduct setIsLoading={setIsLoading} >

                        </ListProduct>
                        <div className="list-button">
                            <Button className="btn-overwrite">
                                <NavLink onClick={handleCloseCart} to="cart">Xem Giỏ Hàng</NavLink>
                            </Button> 
                            <Button className="btn-overwrite">
                                <NavLink onClick={handleCloseCart} to="pay">Thanh Toán</NavLink>
                            </Button>  
                        </div>                      
                    </div>
                </div>
            </SiteWrapper>
        </>
    )
}

export default memo(SiteCart);
