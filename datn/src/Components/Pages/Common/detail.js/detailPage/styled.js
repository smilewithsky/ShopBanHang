import styled from 'styled-components'
import { device } from '../../../../../Contain'
export const DetailPageWrapper = styled.div`
    margin-bottom: 2rem;
    margin-top: 2rem;
    overflow: hidden;

    & .product-image {
        width: 100%;
        display: block;

        & img {
            min-height: 600px;
            max-height: 600px;
            margin-bottom: 1rem;

            @media ${device.mobileL}{
                height: 300px;
                min-height: 0;
            }
        }
    }

    & .product-content {
        padding: 1rem;
        
        &__name {
            padding: 0 0 10px;
            border-bottom: 1px dotted #dfe0e1;
            line-height: 1.4;
            font-size: 2rem;
            font-weight: bold;
        }

        &__price {
            
            &-sale{
                font-size: 1.4rem;

                & > span{
                    margin-right: 0.5rem;
                    font-weight: 600;
                    color: var(--hover-color);
                }
            }

            &-text{
                display: flex;
                justify-content: left;
                align-items: center;
                font-size: 1.8rem;
                font-weight: 600;

                & > .name-text{
                    min-width: 6rem;
                    margin-right: 5rem
                }

                &__oldPrice{
                    text-decoration: line-through;
                    margin-right: 1rem;
                    color: var(--black-color);
                }

                &__currentPrice{
                    color: var(--hover-color)
                }
            }
        }

        &__colorProduct {
            & .list-image__product{
                display: flex;
                flex-wrap: wrap;
            }

            &-color{
                margin-bottom: 1.5rem;
                display: flex;
                align-items: center;
                &-text{
                    margin-right: 5rem;
                    color: var(--black-color);
                    font-weight: 500;
                    font-size: 1.4rem;
                }
    
                &-list__image{
                    display: flex;
    
                    & > .product-content__colorProduct-color-item__image{
                        width: 100px;
                        height: 100px;
                        padding: 0.8rem 1rem;
                        border: 1px solid #ccc;
                        margin-left: 1rem;
                        cursor: pointer;
                        @media ${device.tablet}{
                            margin-bottom: 10px;
                        }

                        @media ${device.tablet}{
                            width: 70px;
                            height: 70px;
                            padding: 0.5rem 0.8rem;
                        }
    
                        &--active{
                            border: 1px solid var(--black-color) !important;
                        }
                    }
                }
            }
        
            &-size{
                display: flex;
                align-items: center;

                &-text{
                    margin-right: 5rem;
                    color: var(--black-color);
                    font-weight: 500;
                    font-size: 1.4rem;
                }

                & .list-size{
                    display: flex;
                    font-size: 1.6rem;
                    font-weight: 600;
                    flex-wrap: wrap;

                    &__item{
                        cursor: pointer;
                        display: block;
                        margin-right: 1.5rem;
                        margin-bottom: 1.5rem;
                        padding: 1.5rem;
                        font-size: 1.4rem;
                        background-color: #f1f1f1;
                        border: 1px solid transparent;
                        min-width: 50px;
                        text-align: center;

                        &--active{
                            border: 1px solid var(--black-color) !important;
                        }
                    }
                }
            }
        }

        &__desc {
            &-list{
                padding: 0;
                &__item{
                    font-size: 1.3rem;
                    margin-bottom: 1rem;

                    &--heading{
                        margin-bottom: 1rem;
                    }

                    &--paragraphs{
                        padding-left: 1.5rem;
                    }
                }
            }
        }

        &__quantity{
            display: flex;
            align-items: center;
            justify-content: left;
            margin-top: 1rem;
            text-align: center;
            & .down , & .up{
                padding: 1rem 1.5rem;
            }

            & .quantity{
                padding: 1.5rem;
            }
        }
    }
`