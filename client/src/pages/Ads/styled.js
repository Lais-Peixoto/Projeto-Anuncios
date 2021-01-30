import styled from 'styled-components';

export const AdsArea = styled.div`
    
    display: flex;
    height: auto;

    .container {
        width: 100%;
        max-width: 1000px;
        margin: auto;
        display: flex;
        padding-top: 3rem;
        align-items: left;
        flex-direction: column;

        h1 {
            font-size: 65px;
        }

        .ad {
            display: flex;
            flex-direction: column;
            margin-bottom: 2rem;
            border-bottom: 1px solid #CCC;
        }

        p {
            margin-bottom: 0;
            font-size: 18px;
            word-wrap: break-word;
        }

        .date {
            color: #AAA;
            font-size: 12px;
            margin-top: 10px;
        }

        .ads-main-area {
            margin: 25px 0;
            height: 1000px;
        }

        .page-controller {
            display: flex;
            justify-content: center;
        }

    }

    @media only screen and (max-width: 600px) {

        .container {
            max-width: 600px;
        }

    }

`;