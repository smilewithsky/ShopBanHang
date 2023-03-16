import styled from 'styled-components'
export const AdminProductItemWrapper = styled.div`
    height: auto;

    & .admin-item{
        display: flex;
        width: 100%;
        align-items: center;
        border: 1px solid #ccc ;
        margin-bottom: 1rem;
        border-radius: 4px;

        & div{
            padding: 1rem;
            margin-right: 1rem;
        }

        &__image{
            width: 100px;
            height: 100px;
            display: block;

            & img{
                width: 100%;
                height: 100%;
            }
        }

        &__type{
            min-width: 100px;
        }

        &__id{

        }

        &__nameProduct{
            min-width: 300px;
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
`