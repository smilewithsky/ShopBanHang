import styled from 'styled-components'
export const AdminUserItemWrapper = styled.div`
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
        
        &__type{
            min-width: 100px;
        }

        &__id{

        }

        &__name{
            min-width: 150px;
        }

        &__email{
            min-width: 150px;
        }

        &__name{
            min-width: 150px;
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