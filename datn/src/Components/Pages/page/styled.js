import styled from 'styled-components'
import { device } from '../../../Contain'
export const PageWrapper = styled.div`
    height: auto;
    & .image-page{
        width: 100%;
        height: 100%;
        margin-bottom: 2rem;
    }

    & .page-content{
        font-size: 13px;
        line-height: 18px;
    }
    & .page-name{
        margin: 20px 0;
        font-size: 24px;

        @media ${device.tablet}{
            font-size: 2rem;
        }

        @media ${device.mobileL}{
            font-size: 1.6rem;
        }

        & .page-date{
            opacity: 0.85;
            display: inline-block;
            margin-right: 10px;
            font-size: 13px;
            font-weight: 600;
            margin-bottom: 10px;
        }
    }
`