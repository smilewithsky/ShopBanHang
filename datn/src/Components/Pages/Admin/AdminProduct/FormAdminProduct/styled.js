import styled from 'styled-components'
import { device } from '../../../../../Contain'
export const FormAdminProductWrapper = styled.div`
    height: auto;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    max-width: 1000px;
    margin-bottom: 3rem;
    & form{
        margin-bottom: 1.5rem;
        width: 100%;
        color: black;

    }

    & .btn-add{
        padding: 1rem 1.4rem;
        font-size: 1.4rem;
        background-color: black;
        color: white;
        transition: all ease-in-out 0.35s;
        margin-right: 1rem;
        border-radius: 4px;
        margin-bottom: 3rem;

        &:hover{
            background-color: white;
            color: black;
        }
    }

    & .btn-edit{
        padding: 1rem 1.4rem;
        font-size: 1.4rem;
        background-color: black;
        color: white;
        transition: all ease-in-out 0.35s;
        border-radius: 4px;
        margin-bottom: 3rem;

        &:hover{
            background-color: white;
            color: black;
        }
    }

    & .form-group{
        width: 100%;
        
        & .title{
            margin-bottom: 1rem;
            display: flex;
            justify-content: space-between;
        }

        & label{
            text-align: left;
            font-size: 1.4rem;
            margin-bottom: 0.3rem;
            display: block;

            @media ${device.laptop}{
                font-size: 1.2rem;
            }
        }

        & .list-btn{
            display: flex;

            & .subtract {
            border-radius: 50%;
            font-size: 1.2rem;
            color: black;
            display: block;
            padding: 0.6rem 1.2rem;
            color: white;
            background-color: black;
            border: 1px solid black;
            margin-right: 1rem;
            min-width: 35px;
            transition: all ease-in-out 0.35s;

                &:hover{
                    color: black;
                    background-color: white;
                }
            }

            & .plus {
                min-width: 35px;
                border-radius: 50%;
                font-size: 1.2rem;
                color: black;
                display: block;
                padding: 0.6rem 1.2rem;
                color: white;
                background-color: black;
                border: 1px solid black;
                margin-right: 1rem;
                transition: all ease-in-out 0.35s;

                &:hover{
                    color: black;
                    background-color: white;
                }
            }

            & .subtract {
                border-radius: 50%;
                font-size: 1.2rem;
                color: black;
                display: block;
                padding: 0.6rem 1.2rem;
                color: white;
                background-color: black;
                border: 1px solid black;
            }   
        }

        

        & input , & select{
            padding: 6px 10px;
            width: 100%;
            font-size: 1.4rem;
            margin-bottom: 0.5rem;
        }
    }
`