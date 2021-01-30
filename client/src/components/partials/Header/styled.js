import styled from 'styled-components';

export const HeaderArea = styled.div`

    background-color: #3C3A3A;
    display: flex;
    height: auto;
  
    a {
        text-decoration: none;
        color: #FFF;
    }

    .container {
        width: 100%;
        max-width: 1000px;
        margin: auto;
        display: flex;
    }

    .logo {
        flex: 2;
        align-items: center;
    }
    
    nav {
        flex: 1;
        display: flex;
        align-items: center;

        ul, li {
            margin: 0;
            padding: 0;
            list-style: none;
        }


        ul {
            flex: 1;
            display: flex;
            align-items: center;

            li {
                flex: 1;

                a {
                    flex: 1;
                    display: flex;
                    justify-content: space-around;
                }
            }
        }

        .myButton {
            span {
                margin: 0 5px;
            }
        }

    }

    @media only screen and (max-width: 600px) {

        padding: 30px 0;

        .container {
            max-width: 600px;
            flex-direction: column;

            .logo {
                text-align: center;
            }

            .optativo {
                display: none;
            }

            li {
                display: flex;
                justify-content: center;
            }

            .myButton {

                width: 150px;
                display: flex;
                justify-content: center;

                span {
                    margin: 0 1px;
                }

            }
        }

    }

`;