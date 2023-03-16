import styled from 'styled-components'
export const ValidateWrapper = styled.div`
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 1rem;
    min-height: 450px;

    margin-bottom: 1rem;

    & .ship {
        font-size: 1.4rem;
        color: red;
    }

    & .form-group{
        margin-top: 1rem;
        width: 100%;
        margin-bottom: 1rem;
        min-height: 77px;
    
        & label{
            line-height: 130%;
            font-size: 1.4rem;
            margin-bottom: 0.3rem;
        }

        & input{
            width: 100%;
            padding: 0.5rem;
            outline: none;
            font-size: 1.4rem;
        }

        & .error-message{
            font-size: 1.2rem;
            color: red;
            margin-top: 0.3rem;
        }

        &__submit{
            display: flex;

            & button{
                flex: 1;
                margin: 1rem;
            }

            & button:first-child{
                flex: 1;
                margin-left: 0rem;
            }
            
            & button:last-child{
                flex: 1;
                margin-right: 0rem;
            }
        }
    }
`