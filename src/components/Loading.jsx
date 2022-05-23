import styled from 'styled-components';

export default function Loading() {
    return (
        <Loader>
            <div></div> 
        </ Loader>
    )
}

const Loader = styled.main`
    width: 100%;
    height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;

    div{
        animation: is-rotating 1s infinite;
        width: 100px;
        height: 100px;
        border: 7px solid #C3CFD9;
        border-top-color: #E8833A;
        border-radius: 50%;
    }
    @keyframes is-rotating{
        to{
            transform: rotate(1turn);
        }
    }
`;