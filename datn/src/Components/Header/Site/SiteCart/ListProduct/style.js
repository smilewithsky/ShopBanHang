import styled from 'styled-components'
export const ListProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid var(--black-color);
    margin-bottom: 2rem;
    width: 100%;
    & .empty{
        text-align: center;
        & img{
            margin: auto;
            width: 200px;
            height: 200px;
        }

        & .text-empty{
            margin-top: 1rem;
            font-weight: 500;
            font-size: 1.8rem;
        }
    }

    & .product-item{
        justify-content: space-between;
        width: 100%;
        display: flex;
        margin-bottom: 1rem;

        &__content{
            width: 100%;
            display: flex;
            margin-bottom: 1rem;
        }
    }

    

    & .product-item__image{
        width: 70px;
        height: 70px;
        border: 1px solid #ededed;
        margin-right: 10px;
        max-width: none;
    }

    & .product-item__info{
        display: flex;
        flex-direction: column;

        & .product-item__name{
            display: block;
            font-size: 1.3rem;
            line-height: 1.8rem;
            margin-bottom: 5px;
            max-height: 40px;
            color: var(--black-color);
            font-size: 500;
        }

        & .product-item__box{
            display: flex;
            justify-content: space-between;
            align-items: center;

            & .product-item__container{
                display: flex;

                & .product-item__quantity{
                    float: left;
                    width: auto;
                    background: #ededed;
                    text-align: center;
                    padding: 6px 12px;
                    font-size: 12px;
                    line-height: 1;
                    margin-right: 12px;
                }

                & .product-item__price{
                    font-size: 1.4rem;
                    color: var(--black-color);
                }
            }


        }
    }

    
    & .product-item__remove svg{
        justify-items: right;
        color: #252a2b;
        text-decoration: none;
        outline: none;
        font-weight: 700;
        font-size: 1.7rem;
        cursor: pointer;
    }
    
`