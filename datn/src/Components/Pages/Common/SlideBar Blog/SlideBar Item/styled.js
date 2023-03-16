import styled from 'styled-components'
export const SideBarItemWrapper = styled.div`
    margin: 0 0 30px;
    padding: 20px;
    border: 1px solid #e3e5ec;
    & .sidebar-title{
        cursor: pointer;
        & h3{
            font-size: 18px;
            text-transform: uppercase;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #000;
            text-align: center;
        }

        & svg{
            margin-left: 0.5rem;
        }
    }

    & .sidebar-list{
        height: auto;
        transition: all 0.3s ease-in-out;
        overflow: hidden;

        &.close{
            height: 0px;
            /* animation: hiddenList 0.3s ease-in-out forwards; */
        }

        @keyframes hiddenList {
            100%{
                height: 100%;
            }
            0%{
                height: 0px;
            }
        }
        
        &__item{
            border-bottom: 1px #efefef dotted;
            padding: 1.5rem 0;
            margin: 0;

            &-link{
                text-decoration: none;
                display: flex;

                &__image{
                    width: 30%;

                    & img{
                        height: auto;
                        max-height: 7rem;
                        max-width: 7rem;
                        width: 100%;
                        display: block;
                    }
                }

                &__content{
                    flex: 1;
                    padding-left: 1rem;
                    font-size: 1.4rem;
                    color: var(--black-color);
                    &__title{

                    }

                    &__time{
                        color: #252a2b;
                        line-height: 1.1;
                    }
                }

            }

        }
    }
`