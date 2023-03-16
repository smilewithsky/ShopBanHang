import styled from 'styled-components'
import { device } from '../../../Contain'
export const ButtonWrapper = styled.button`
    padding: 19px 30px;
    position: relative;
    width: 100%;
    white-space: nowrap;
    margin: ${props => props.margin || "0"};
    font-size: ${props => props.font || "14px"};
    margin-top: 10px;
    margin-bottom: 25px;
    color: #fff;
    border-color: #000;
    background-color: #000;
    transition: all 0.3s ease-in-out;

    @media ${device.tablet}{
        padding: 0.8rem;
    }

    & > a{
        padding: 19px 30px;
        position: relative;
        width: 100%;
        white-space: nowrap;
        margin: ${props => props.margin || "0"};
        font-size: ${props => props.font || "14px"};
        margin-top: 10px;
        margin-bottom: 25px;
        color: #fff;
        border-color: #000;
        background-color: #000;
        transition: all 0.3s ease-in-out;
        color: var(--white-color);
        text-decoration: none;

        @media ${device.tablet}{
            padding: 0.8rem;
        }
    }

    &:hover{
        background-color: var(--white-color);
        color: var(--black-color)
    }

    &:hover > a{
        background-color: var(--white-color);
        color: var(--black-color)
    }
`