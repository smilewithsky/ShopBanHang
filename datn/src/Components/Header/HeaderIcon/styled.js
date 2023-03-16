import styled from 'styled-components'
import { device } from '../../../Contain'
export const HeaderIconWrapper = styled.div`
    height: 100%;
    & .list{
        height: 100%;
        display: flex;
        justify-content: right;
        align-items: center;

        &-item{
            margin-right: 1.5rem;
            cursor: pointer;
            &__link{
                font-size: 1.6rem;
                margin-bottom: 0;
                color: #252a2b;
            }

            &-md{
                display: none;
                @media ${device.laptop}{
                    display: block;
                }
            }
        }
    }
`