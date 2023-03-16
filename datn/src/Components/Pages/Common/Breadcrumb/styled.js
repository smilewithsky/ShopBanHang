import styled from 'styled-components'
import { device } from '../../../../Contain'
export const BreadCrumbWrapper = styled.div`
    height: auto;

    & .breadcrumb-item{
        font-size: 1.8rem;

        @media ${device.tablet}{
            font-size: 1.3rem;
        }
    }
`