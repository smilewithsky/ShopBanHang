import styled from 'styled-components'
import { device } from '../../../../Contain'
export const FilterWrapper = styled.div`
    height: auto;
    width: 100%;

    & .filter-group{
        width: 100%;
        margin-top: 3rem;
        padding-bottom: 3rem;
        border-bottom: 1px solid #ccc;

        &__header{
            cursor: pointer;
            color: var(--black-color);
            font-weight: bold;
            font-size: 1.8rem;
            margin-bottom: 1rem;
        }

        &__body{
            & .filter-check-box{
                display: flex;
                align-items: center;

                & .filter-input-check-box{
                    margin-right: 1rem;
                }

                & label{
                    cursor: pointer;
                    display: block;
                    font-weight: 600;
                    font-size: 1.4rem;

                    & svg{
                        color: #ffce3d;
                    }
                }
            }

            & .filter-input{
                width: 100%;

                & input , & select{
                    cursor: pointer;
                    border-radius: 0%;
                    outline: none;
                    padding: 0.8rem 1rem;
                    width: 80%;
                    font-size: 1.4rem;

                    @media ${device.tablet}{
                        width: 100%;
                    }
                }

                & label{
                    cursor: pointer;
                    display: block;
                    font-weight: 600;
                    font-size: 1.4rem;
                }
            }
        }
    }
`