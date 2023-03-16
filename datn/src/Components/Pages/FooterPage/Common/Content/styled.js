import styled from 'styled-components'
export const ContentWrapper = styled.div`
    color: var(--black-color);

    & .content-title {
        margin: 20px 0;
        font-size: 24px;
    }

    & .content-date {
        font-size : 1.3rem;
        line-height: 1.5;
        font-weight: 500;
    }

    & .content-brand{
        font-weight: 600;
        font-size: 1.4rem;
        margin-bottom: 2rem;
    }

    & .content-desc {
        margin-bottom: 4rem;
        max-width: 100%;

        &__item{
            font-size: 1.4rem;
            margin-bottom: 15px;
            line-height: 21px;
        }
    }

`