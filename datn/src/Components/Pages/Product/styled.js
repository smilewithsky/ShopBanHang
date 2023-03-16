import styled from 'styled-components'
export const ProductItemWrapper = styled.div`
    & .searchParam {
        margin-bottom: 2rem;
    }

    & .list-button{
        display: flex;

        & button{
            padding: 1rem 1.25rem ;
            margin-right: 1rem;
            font-size: 1.4rem;
            border-radius: 4px;
            background-color: transparent;
            outline: none;
            &.active{
                background-color: #51bae8;
            }
        }
    }
`