import styled from 'styled-components';

export const FormArea = styled.div`
    
    display: flex;
    height: auto;

    .container {
        width: 100%;
        max-width: 1000px;
        margin: auto;
        display: flex;
        padding-top: 3rem;
        align-items: center;
        flex-direction: column;

        form {
            display: flex;
            flex-direction: column;
        }

        .botao {
            margin-top: 10px;
        }
    }

    @media only screen and (max-width: 600px) {

        .container {
            max-width: 600px;
            padding: 25px;
        }

        .form {
            width: 100%;
            max-width: 600px;

        }

        .mobileForm {
            width: 100%;
            max-width: 300px;

            .MuiInput-underline:before {
                width: 270px;
            }
            .MuiInput-underline:after {
                width: 270px;
            }
        }

    }

`;