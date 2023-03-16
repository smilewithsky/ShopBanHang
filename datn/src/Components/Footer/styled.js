import styled from 'styled-components'
export const FooterWrapper = styled.div`
    height: auto;
    margin-top: 2rem;
    
    & .footer-title{
        font-size: 2rem;
        letter-spacing: 0.02rem;
        margin: 0 0 2rem;
        position: relative;
        line-height: 3rem;
    }

    & .footer-list{
        padding-left: 0;
        margin-bottom: 1.5rem;
    }

    & .footer-item > .footer-span , & .footer-item > .footer-link{
        color: var(--black-color);
        display: block;
        font-size: 1.4rem;
        line-height: 2.8rem;
        padding-left: 0px;
        text-decoration: none;
    }
`