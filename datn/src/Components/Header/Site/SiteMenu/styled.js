import styled from 'styled-components'
import { device } from '../../../../Contain'
export const SiteWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999999;
    background: rgba(0,0,0,0.3);
    transition: all 0.3s ease-in-out;

    & .site{
        padding: 10rem 6rem;
        background-color: var(--white-color);
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        width: 40%;
        height: 100%;
        z-index: 10000000;

        @media ${device.laptop}{
            width: 70%;
            padding: 3rem;
        }  

        @media ${device.tablet}{
            width: 100%;
        }

        &-header{
            display: flex;
            align-items: center;
            justify-content: space-between;

        }

        &-close{
            svg{
                cursor: pointer;
                font-size: 27px;
                height: 19px;
                cursor: pointer;
                display: block;
                transition: all 150ms linear;
            }
        }

        &-content{
            margin-top: 2rem;
            
            & .list-button{
                display: flex;
            }

            &__list{
                padding: 0;
            }

            &__item > .site-content__item-link{
                font-size: 18px;
                font-weight: 600;
                color: var(--black-color);
                text-decoration: none;
            }
        }
    }
`