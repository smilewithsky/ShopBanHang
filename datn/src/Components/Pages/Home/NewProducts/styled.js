import styled from 'styled-components'
export const NewsProductWrapper = styled.div`
    height: auto;
    
    /* .slick-slider {
    margin:0 -15px;
    }
    .slick-slide {
        padding:10px;
        margin-right:15px;
        margin-left:15px;
    } */

    & .slick-prev{
        position: absolute;
        left: 10px;
        top: 50%;
        z-index: 1000;
        /* color: black; */

        &::before{
            color: black;
            font-size: 2rem;
        }
    }

    & .slick-next{
        position: absolute;
        right: 10px;
        top: 50%;
        z-index: 1000;
        /* color: black; */

        &::before{
            color: black;
            font-size: 2rem;
        }
    }
`