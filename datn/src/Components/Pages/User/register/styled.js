import styled from 'styled-components'
import { device } from '../../../../Contain'
export const RegisterWrapper = styled.div`
    height: auto;
    position: fixed;
    background-color: white;
    width: 100%;
    height: 100%;
    z-index: 100000000000;
    top: 0;
    left: 0;
    background-image: url( ${props=>props.background} );
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    & .login-page{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    & .login-content{
        padding: 1rem;
        width: 600px;
        height: auto;

        @media ${device.laptop}{
            width: 500px;
        }
    }

    & .header{

    }

    & .form-login{
        background-color: white;
        margin: 0 auto;
        width: 100%;
        display: block;
        border: 1px solid #ccc;
        border-radius: 1rem;
        padding: 3rem;

        & .form-header{
            display: block;
            font-size: 39px;
            color: #333;
            line-height: 1.2;
            padding-bottom: 5rem;

            @media ${device.tablet}{
                padding-bottom: 3rem;
            }
        }

        & .form-group{
            width: 100%;
            margin-bottom: 2rem;

            & label{
                font-size: 1.6rem;
                color: var(--black-color);  
                & span{
                    font-weight: 700;
                    color: red;
                }
            }

            & .form-input{
                border: 1px solid transparent;
                border-bottom: 1px solid #ccc;
                outline: none;
                font-size: 1.4rem;
                padding: 0.8rem 1rem;
                width: 100%;
                position: relative;
            
                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 3px;
                    background-color: black;
                }
                
                &:focus{
                    border-bottom: 1px solid black
                }
            }

            & .error{
                color: red;
                margin-top: 0.5rem;
            }

            & .forgot-password{
                float: right;
                cursor: pointer;
                font-size: 1.3rem;
                font-weight: 500;
                padding-bottom: 0.1rem;
                border-bottom: 1px solid var(--black-color);
            }

            & input[type="submit"]{
                margin-top: 2rem;
                padding: 1rem 1.5rem;
                border: 1px solid transparent;
                font-size: 1.4rem;
            }

            & .btn-overwrite{
                margin-bottom: 1rem;
            }

            & .other-login{
                font-size: 1.4rem;
                font-weight: 600;
            }

            & .list-social{
                display: flex;
                justify-content: center;
                align-items: center;

                & svg{
                    cursor: pointer;
                    padding: 0.8rem;
                    font-size: 2.5rem;
                    color: white;
                    margin-left: 0.8rem;
                    border-radius: 50%;
                    min-width: 2.5rem;
                    min-height: 2.4rem;
                    transition: all 0.35s ease-in;
                    
                    &.facebookIcon{
                        background-color: #3b5998;

                        &:hover{
                            color: #3b5998;
                            background-color: #333;
                        }
                    }

                    &.googleIcon{
                        background-color: #1da1f2;

                        &:hover{
                            color: #1da1f2;
                            background-color: #333;
                        }
                    }

                    &.twitterIcon{
                        background-color: #ea4335;

                        &:hover{
                            color: #ea4335;
                            background-color: #333;
                        }
                    }
                }
            }
        }
    }
`