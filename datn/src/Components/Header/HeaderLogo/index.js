import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { HeaderLogoWrapper } from './styled'

function HeaderLogo(props) {
  const {width , src , small} = props
  return (
    <HeaderLogoWrapper width={width} small={small}>
        <Link to="/" className='header-link'>
            <img src={src}/>
        </Link>
    </HeaderLogoWrapper>
  )
}

export default memo(HeaderLogo)