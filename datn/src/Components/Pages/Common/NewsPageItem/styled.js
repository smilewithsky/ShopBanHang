import styled from 'styled-components'
import { device } from '../../../../Contain'
export const NewsItemWrapper = styled.div`
    height: auto;


    & .newsPage-item{
        display: flex;
        color: var(--black-color);
        text-decoration: none;
        margin-bottom: 1.5rem;

        & .item-image{
            height: 200px;
            width: 300px;
            display: block;
            margin-right: 1rem;

            @media ${device.tablet}{
                width: 200px;
                height: 150px;
            }

            @media ${device.mobileL}{
                width: 150px ;
                height: 100px;
            }
        }

        & .item-content{
            &__title{
                margin-bottom: 10px;
                font-size: 2rem;

                @media ${device.tablet}{
                    font-size: 1.8rem;
                }

                @media ${device.mobileL}{
                    font-size: 1.4rem;
                    margin-bottom: 0.5rem;
                }
            }

            &__date{
                margin-bottom: 15px;
                color: #999;
                font-size: 1.3rem;

                @media ${device.mobileL}{
                    font-size: 1rem;
                    margin-bottom: 0.5rem;
                }
            }

            &__desc{
                font-size: 1.4rem;
                margin: 0 0 10px 0;
                line-height: 21px;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;

                @media ${device.tablet}{
                    font-size: 1.2rem;
                }

                @media ${device.mobileL}{
                    font-size: 1.1rem;
                    -webkit-line-clamp: 3;
                    margin-bottom: 0.5rem;
                }
            }
        }
    }
`