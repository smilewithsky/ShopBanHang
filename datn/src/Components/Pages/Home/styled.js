import styled from 'styled-components'
import { device } from '../../../Contain'
export const HomeWrapper = styled.div`
    height: auto;
    overflow: hidden;
    & .title{
        padding: 50px 0;
        font-size: 3.7rem;

        @media ${device.laptop}{
            font-size: 2.4rem;
        }
    }

    & .container{
        margin-bottom: 2rem;
    }
`