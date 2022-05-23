import { useState } from 'react';
import styled from 'styled-components';

export default function Forms(props) {

    const {nameUser, setNameUser, cpfUser, setCpfUser} = props;
    

    return (
        <ConteinerForms>
            <h2>Nome do comprador:</h2>
            <input placeholder='Digite seu nome...' onChange={event => setNameUser(event.target.value)} value={nameUser} />
            <h2>CPF do comprador:</h2>
            <input placeholder='Digite seu CPF...' onChange={e => setCpfUser(e.target.value)} value={cpfUser} />
        </ConteinerForms>
    )
}

const ConteinerForms = styled.section`
    margin-top: 42px;
    h2{
        font-size: 18px;
        line-height: 21px;
        color: #293845;
    }
    input{
        width: 327px;
        height: 51px;   
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        color: #AFAFAF;
        margin: 3px 0 8px;
    }
`;