import styled from 'styled-components'
import { device } from '../../Contain'
export const HeaderWrapper = styled.div`
    height: auto;
    position: relative;
    padding: 2rem 6rem 1rem;
    background-color: #fff;
    z-index: 9999999;

    @media ${device.laptop}{
        padding: 2rem 1.5rem 1rem;
    }

    & .col-lg-0{
        @media ${device.laptop}{
            display: none !important;
        }
    }
`

export const Site = styled.div`
    width: 100%;
`