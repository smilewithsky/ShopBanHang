import styled from 'styled-components'
import { device } from '../../../../Contain'
export const ProductItemWrapper = styled.div`
    height: auto;
    user-select: none;
    color: var(--black-color);
    cursor: pointer;
    position: relative;

    & .product-item {
        text-decoration: none;
        margin-bottom: 2rem;
        display: block;
        border-radius: 1rem;

        &:hover .product-item__image .product-item__image-colors{
            bottom: 0;
        }

        &__image {
            overflow: hidden;
            position: relative;
            display: block;
            width: 100%;


            & > img {
                object-fit: cover;
                width: 100%;
                min-height: 500px;
                max-height: 500px;
                display: block;

                @media ${device.laptop} {
                    min-height: 300px;
                    max-height: 300px;
                }

                @media ${device.tablet}{
                    min-height: 200px;
                    max-height: 200px;
                }
            }

            &-colors {
                bottom: -100%;
                transition: all 0.6s ease-in-out;
                position: absolute;
                height: auto;
                width: 100%;
                background-color: white;
                display: flex;
                justify-content: center;
                align-items: center;

                &__container{
                    width: auto;
                    height: auto;
                    padding: 1rem;

                    &-text{
                        color: var(--black-color);
                        text-align: center;
                        padding: 0;
                        margin: 0;
                        clear: both;
                        display: block;
                        font-size: 10px;
                        height: 15px;
                        line-height: 15px;
                        overflow: hidden;
                        overflow-wrap: break-word;
                        text-align: center;
                        width: 100%;
                    }

                    &-image{
                        overflow: hidden;
                        width: 35px;
                        display: block !important;
                        height: 40px;

                        & img{
                            object-fit: cover;
                            width: 100%;
                            display: inline-block;
                        }
                    }
                }
            }
        }

        &__sale {
            position: absolute;
            top: 10px;
            right: 0;


            &-text{
                right: 15px;
                position: absolute;
                font-weight: bold;
                font-size: 1.2rem;
                display: block;
                background-color: red;
                padding: 0.5rem 1rem;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                color: var(--white-color);
                min-width: 40px;
            }
        }

        &__content {
            padding: 0.8rem 1rem;
            margin-top: 1rem;
            text-align: center;
            &-name{
                color: var(--black-color);
                font-weight: 600;
                font-size: 1.4rem;
                line-height: 16px;
                overflow: hidden;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                white-space: nowrap;
                text-overflow: ellipsis;
            }

            &-price{
                display: flex;
                justify-content: center;
                &-oldPrice{
                    font-size: 1.4rem;
                    margin-right: 2rem;
                    color: var(--black-color);
                    font-weight: bold;
                    text-decoration: line-through;
                }

                &-currentPrice{
                    font-size: 1.4rem;
                    color: var(--hover-color);
                    font-weight: bold;
                    text-decoration: none;
                }
            }
        }


    }
`