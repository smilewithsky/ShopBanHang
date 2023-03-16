import styled from 'styled-components'
import { device } from '../../../../Contain'
export const AdminProductWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 100px;
    text-align: center;
    display: inline-block;
    max-height: 80vh;
    overflow-y: scroll;

    @media ${device.laptop}{
        max-height: 100vh;
    }

    & .admin-list{
        display: inline-block;
    }

    & .admin-item{
        display: flex;
        width: 100%;
        align-items: center;
        border: 1px solid #ccc ;
        margin-bottom: 1rem;
        border-radius: 4px;
        font-size: 1.4rem;

        @media ${device.laptop}{
            font-size: 1.2rem;
        }

        & div{
            padding: 1rem;
            margin-right: 1rem;
        }

        &__image{
            min-width: 100px;
        }

        &__sale{
            min-width: 70px;
        }

        &__price{
            min-width: 70px;
        }

        &__type{
            min-width: 100px;
        }

        &__id{

        }

        &__nameProduct{
            min-width: 500px;
            word-wrap: break-word;

            @media ${device.laptop}{
                min-width: 300px;
                max-width: 300px;
            }
        }

        &__nav{
            
        }
    }

    & .form{
        & > * {
            outline: none;
        }

        .form-group{
            justify-content: center;
            width:60%;
            display: flex;
            margin: auto;
            margin-bottom: 1rem;
            align-items: center;

            & label{
                text-align: left;
                min-width: 120px;
                font-size: 1.4rem;
                margin-bottom: 0.5rem;
                color: black;
            }

            & input{

                width: 100%;
                padding: 0.6rem 1rem;
                font-size: 1.4rem;
            }

            & select{
                width: 100%;
                font-size: 1.4rem;
                padding: 0.6rem 1rem;
            }

            &__2{
                display: flex;
                flex-direction: column;
            }

            & .container-size__input{
                display: flex;
                width: 80%;

                & label{
                    text-align: center;
                }

                & input:first-child{
                    margin-right: 1rem;
                }
            }

            & .color-form{
                width: 100%;

                & .form-group__2{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    width: 100%;

                    & .container-color{
                        width: 100%;
                        display: flex;

                        & input:first-child{
                            margin-right: 1rem;
                        }
                    }

                    & .container-size{
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        width: 100%;

                        & label{
                            text-align: center;
                        }
                    }
                }
            }
        }

        & .description{
            & label{
                text-align: center;
                font-size: 1.5rem;
                margin-bottom: 1rem;
            }
        }
    }

    & .list-button{
        margin-bottom: 3rem;
                
        & .btn{
            padding: 1rem 1.5rem;
            font-size: 1.6rem;
            color: white;
            min-width: 100px;
            margin-right: 1rem;

            &-add{
                background-color: #007bff !important;
            }

            &-edit{
                background-color: #28a745 !important;
            }
        }
    }
`