import styled from 'styled-components'
import { device } from '../../../../Contain'
export const PageContentWrapper = styled.div`
    height: auto;
    color: var(--black-color);


    & .page-description{
        & .page-item__news-show{
            width: 100%;
            display: block;
            margin-bottom: 1rem;
            height: auto;
            object-fit: cover;
        }

        & .page-item{
            &__news{
                display: flex;
                margin-bottom: 15px;
                align-items: center;
                font-size: 1.4rem;
                &-image{
                    width: 10px;
                }
            }
        }

        & .page-text{
            font-size: 1.4rem;

            @media ${device.tablet}{
                font-size: 1.2rem;
            }
        }
    }
`