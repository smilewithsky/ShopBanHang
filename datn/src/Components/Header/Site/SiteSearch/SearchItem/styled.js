import styled from 'styled-components'
export const SearchItemWrapper = styled.div`
    height: auto;
    width: 100%;
    display: block;
    overflow: hidden;

    & > .search-item__link{
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-bottom: 1rem;
        display: flex;
        align-content: center;
        width: 100%;
        text-decoration: none;
        color: var(--black-color);


        & > img{
            width: 70px;
            margin-right: 1.5rem;
        }

        & .search-item__content{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }
`