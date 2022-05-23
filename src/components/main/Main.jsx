import React from 'react';
import styled from 'styled-components';
import MovieCover from "./MovieCover";
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function Main() {

    const [lista, setLista] = useState(false);

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        requisicao.then(resposta => {
            setLista(resposta.data);
        });
        requisicao.catch(resposta => {
            alert('ERRO NA REQUISIÇÃO DA API');
            console.log(resposta);
        });
    }, []);

    return (

        <Container>
            <div>
                <header>Selecione o filme</header>
                <section className="catalogo-de-filmes">
                    {(lista !== false) ?
                        (lista.map((item, index) =>
                            <div><MovieCover capa={item.posterURL} id={item.id} key={index} /></div>
                        )) :
                        (<h1>LOADING</h1>)
                    }
                </section>
            </div>
        </Container>

    )
}

const Container = styled.main`

    width: 100%;
    display: flex;
    justify-content: center;

    header{
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #293845;
    }
    .catalogo-de-filmes{
        width: 320px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    h1{
        font-size: 50px;
        width: 100%;
        text-align: center;
        color: #293845;
    }
`;