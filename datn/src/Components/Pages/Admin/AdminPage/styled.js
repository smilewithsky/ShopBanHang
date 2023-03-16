import styled from 'styled-components'
import { device } from '../../../../Contain'
export const AdminPageWrapper = styled.div`
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

    & .list-button{
        margin-left: auto;
        margin-right: auto;
        max-width: 50%;
        display: flex;
        justify-content: center;

        & button{
            margin-left: 1rem;
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

        &__id{
            min-width: 100px;
        }

        &__type{
            width: 100px;
        }

        &__namePage{
            min-width: 250px;
            max-width: 250px;
        }

        &__image{
            min-width: 100px;
        }

        &__content{

        }

        &__desc{

        }

        &__date{
            min-width: 1rem;
        }

        &__nav{
            flex: 1;
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
