import styled from 'styled-components'
export const NotFoundWrapper = styled.div`
    height: auto;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${props => props.background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999999999999999999999999;

    & .not-found-text{
        font-size: 2.8rem;
    }
`