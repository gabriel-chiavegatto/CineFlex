import React from 'react';
import styled from 'styled-components';
import Footer from "./Footer";
import MovieCover from "./MovieCover";


export default function Main() {
    return (

        <Container>
            <div>
                <header>Selecione o filme</header>
                <section className="catalogo-de-filmes">
                    <div><MovieCover /></div>
                </section>
                <footer><Footer /></footer>

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

    footer{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 117px;
        background: #DFE6ED;
        border: 1px solid #9EADBA;
        display: flex;
        justify-content: center;
        align-items: center;
    }





`;