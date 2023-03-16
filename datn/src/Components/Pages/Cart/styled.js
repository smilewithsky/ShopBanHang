import styled from 'styled-components'
import { device } from '../../../Contain'
export const CartWrapper = styled.div`
    margin-bottom: 2rem ;

    & .cart{
        border-top: 4px solid #1e85be;

        &-list{
            width: 100%;
            border: 1px solid black;
            height: auto;
            margin-top: 1rem;
            padding: 1.5rem;
            display: block;
            border-radius: 4px;

            &-item{
                display: flex;
                justify-content: space-between;
                text-align: center;
                align-items: center;
                margin-bottom: 0.75rem;
                font-size: 1.4rem;

                @media ${device.tablet}{
                    font-size: 1.2rem;
                }

                &__sum-price{
                    text-align: right;
                }

                &__remove{
                    cursor: pointer;
                    font-size: 1.7rem;
                    font-weight: bold;
                    color: red;
                }

                & td{
                    flex: 2;


                    &:first-child{
                        flex: 1;
                    }
                }

                &__image{
                    & > img{
                        margin: auto;
                        width: 70px;
                        height: 70px;
                        display: block;
                    }
                }

                &__name-product {
                    overflow: hidden;
                    & > a{
                        font-size: 1.4rem;
                        color: var(--black-color);
                        text-decoration: none;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                }
            }
        }
        
        &-empty{
            padding: 2rem 1.5rem;
            background-color: #f7f6f7;
            color: #515151;
            font-size: 1.4rem;
            margin-bottom: 2rem;

            & .image-empty{
                margin: auto;
                width: 300px;
                height: 300px;

                @media ${device.tablet}{
                    width: 200px;
                    height: 200px;
                }
            }

            & .empty-text{
                margin-top: 1rem;
                font-weight: 600;
                font-size: 1.8rem;
            }
        }

        & .btn-cart{
            margin-top: 1rem;
            background-color: #ebe9eb;

            &:hover{
                background-color: var(--white-color);
            }

            & > a{
                font-size: 100%;
                margin: 0;
                line-height: 1;
                cursor: pointer;
                position: relative;
                text-decoration: none;
                overflow: visible;
                padding: 0.618em 1em;
                font-weight: 700;
                border-radius: 3px;
                left: auto;
                color: #515151;
                border: 0;
                display: inline-block;
                background-image: none;
                box-shadow: none;
                text-shadow: none;
                padding: 1rem 1.5rem;
                display: block;
                font-size: 1.4rem;
                color: var(--black-color);
            }
        }

        & .btn-pay{
            background-color: var(--black-color);
            & > a{
                color: var(--white-color);
            }

            &:hover > a{
                color: var(--black-color);
            }
        }
    }
`