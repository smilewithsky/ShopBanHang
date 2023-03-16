import styled from 'styled-components'
export const AdminPageItemWrapper = styled.div`
    height: auto;

    & .btn{
        color: white;
        padding: 0.4rem 0.6rem;
        margin-right: 1rem;
        transition: all ease-in 0.35s;
    }

    & .btn-edit{
        background-color: #0d6efd;

        &:hover{
            background-color: #0b5ed7;
        }
    }

    & .btn-see{
        background-color: #62b35d;
    }

    

    & .btn-delete{
        background-color: #dc3545;

        &:hover{
            background-color: #bb2d3b;
        }
    }
`