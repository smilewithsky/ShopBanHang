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
    /* display: none; */

    & .site{
        padding: 10rem 6rem;
        background-color: var(--white-color);
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        width: 40%;
        @media ${device.laptop}{
            width: 70%;
            padding: 3rem;
        }

        height: 100%;
        z-index: 10000000;

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

                & .btn-overwrite:first-child{
                    margin-right: 1rem;
                }

                & .btn-overwrite:last-child{
                    margin-left: 1rem;
                }
            }
        }
    }

    & .loading{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: white;
        z-index: 9999999;
        display: flex;
        justify-content: center;
        align-items: center;
        & .item-loading{
            font-size: 1.8rem;
            font-weight: 600;
        }
    }
`