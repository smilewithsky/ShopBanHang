import styled from 'styled-components'
import { device } from '../../../Contain'
export const HeaderMenuWrapper = styled.div`
    width: 100%;
    background-color: var(--white-color);

    & .col-0{
        @media ${device.laptop}{
            display: none;
        }
    }
    
    & .row.fixed{
        border: 1px solid #eee;
        position: fixed;
        min-width: 100%;
        left: 0;
        top: 0;
        right: 0;
        padding: 1rem 1rem 0rem;
    }

    & .menu-list{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0;
    }

    & .menu-item{
        &.menu-item-relative{
            position: relative;

            & .submenu-item-list__item-link{
                padding: 0.9rem 2rem;
            }
        }

        &:hover .submenu{
            transform: rotate3d(0, 0, 0, 0deg) !important;
        }

        &:hover .menu-item__link{
            color: var(--hover-color);
        }

        &:hover .menu-item__link::before{
            width: 100%;
        }

        &__link{
            color: #252a2b;
            display: block;
            font-size: 15px;
            font-weight: 400;
            padding: 10px 0 15px;
            margin: 0 25px 0 0;
            position: relative;
            text-decoration: none;
            position: relative;
            transition: all 0.35s ease-in-out;

            &::before{
                content: "";
                transition: all 0.35s ease-in-out;
                position: absolute;
                width: 0%;
                height: 2px;
                background-color: var(--hover-color);
                bottom: 0;
            }
        }
    }

    .submenu{
        min-width: max-content;
        position: absolute;
        width: 100%;
        background-color: var(--white-color);
        left: 0;
        background-color: #fff;
        border-top: 1px solid #efefef;
        box-shadow: 0 5px 10px rgb(0 0 0 / 20%);
        width: 100%;
        z-index: 9999;
        padding: 20px 0px;
        transform: rotate3d(1, 0, 0, -90deg);
        transition: all 0.5s ease 0s;
        transform-origin: 0 0 0;

        & .submenu-item__header-link{
            color: #252a2b;
            text-decoration: none;
            display: block;
            width: 100%;
            margin-bottom: 1rem;
            border-bottom: 1px solid rgb(204, 204, 204);
            padding-bottom: 1rem; 
            transition: all 0.3s ease-in-out;

            &:hover{
                color: var(--hover-color);
            }
        }
        
        &-item-list{
            padding: 0;
            width: 100%;

            &__item{
                &-link{
                    display: block;
                    text-decoration: none;
                    margin-bottom: 5px;
                    font-size: 1.4rem;
                    transition: all 0.3s ease-in-out;
                    color: var(--black-color);                    
                    svg{
                        transition: all 0.3s ease-in-out;
                    }
                    
                    &:hover span , &:hover svg{
                        color: var(--hover-color);
                    }
                    
                    & > span{
                        color: var(--black-color);
                        transition: all 0.3s ease-in-out;
                        margin-left: 8px;
                    }
                }
            }
        }
    }
`