import styled from 'styled-components'
import { device } from '../../../Contain'
export const HeaderLogoWrapper = styled.div`
    /* width: ${props => props.width}; */
    display: flex;
    align-items: center;

    & a{
        
        width: 12rem;

        display: block;
        display: flex;
        align-items: center;
        min-width: 50px;
        min-height: 50px;
        
        @media ${device.laptop}{
            width: 10rem;
        }
        & img{
            width: 100%;
        }
    }

    & img{
        width: ${props => props.width ? props.width : "100%"};
        
        @media ${device.laptop}{
            width: ${props => props.small};
        }
    }
`

export const Slide = styled.div`
    /* position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; */
`