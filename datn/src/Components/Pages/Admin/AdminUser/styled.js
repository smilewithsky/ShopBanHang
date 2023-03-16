import styled from 'styled-components'
import { device } from '../../../../Contain'
export const AdminUserWrapper = styled.div`
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
        text-align: center;
        word-wrap: break-word;


        & div{
            padding: 1rem;
            margin-right: 1rem;
        }
        
        &__type{
            min-width: 100px;
        }

        &__id{

        }

        &__name{
            min-width: 150px;
        }

        &__email{
            max-width: 150px;
            min-width: 150px;
        }

        &__phone{
            min-width: 150px;
        }

        &__list{
            min-width: 350px;
            max-width: 350px;
        }

        &__address{
            min-width: 150px;
            max-width: 150px;
        }

        &__nav{
            justify-items: right;
            display: flex;
            & > .btn{
                padding: 1rem 1.5rem;
                margin-right: 1rem;
            }

            & .btn-edit{
                background-color: #007bff;

                &:hover{
                    background-color: #0069d9;
                }
            }
            & .btn-remove{
                background-color: #dc3545;

                &:hover{
                    color: white;
                    background-color: #c82333;
                }
            }
        }
    }

    & form{
        width: 50%;
        margin: auto;

        & .form-group{
            align-items: center;
            margin-bottom: 1rem;
            display: flex;

            & label{
                font-size: 1.4rem;
                text-align: left;
                min-width: 150px;
            }

            & input{
                font-size: 1.4rem;
                padding: 0.4rem 0.6rem;
                flex: 1;
            }

            & select{
                padding: 0.4rem 0.6rem;
                font-size: 1.4rem;
                flex: 1;
            }
        }
    }

    & .form-group__2{
        margin-bottom: 1rem;
        & > div{
            display: flex;

            & label{
                margin-left: 1rem;

            }

            & input{
                margin-bottom: 1rem;
            }
        }
    }

    & .btn{
        font-size: 1.4rem;
        padding: 1rem 1.5rem;
        margin-bottom: 1rem;
        color: white;
        min-width: 70px;
        border-radius: 4px;
        &:last-child{
            margin-left: 1rem;
        }

        &-add{
            background-color: #007bff;
        }

        &-edit{
            background-color: #28a745;
        }
    }
`