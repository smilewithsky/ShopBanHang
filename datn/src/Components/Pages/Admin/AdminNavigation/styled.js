import styled from 'styled-components'
import { device } from '../../../../Contain'
export const AdminNavWrapper = styled.div`
    height: auto;
    padding: 2rem;
    left: 0;
    background-color: lightblue;
    width: 100%;
    position: fixed;

    @media ${device.tablet}{
        width: 100%;
        height: auto;
    }

    @media ${device.laptop}{
        min-height: 0px;
        max-height: 100px;
        width: 100%;
    }
    
    & .content{
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;
        @media ${device.laptop}{
            display: flex;
            align-items: center;
        }

        & .content-nav-list{
            display: flex;
        }
    }

    & .content-logo{
        min-width: 50px;
        min-height: 50px;   
        max-width: 100px;
        display: flex;
        align-items: center;

        & a{
            width: 100%;
            height: 100%;

            & img{
                width: 100%;
                display: block;
                height: 100%;
            }
        }
    }

    & .content-nav-list{
        font-size: 1.4rem;
        font-weight: bold;

        @media ${device.laptop}{
            display: flex;
            justify-content: space-between;
        }

        @media ${device.tablet}{
            font-size: 1.2rem;
        }

        & > p {
            cursor: pointer;
            margin: 1rem;
            display: block;

            @media ${device.tablet}{
                font-size: 1.2rem;
                margin: 0.5rem;
            }
        }
    }
`