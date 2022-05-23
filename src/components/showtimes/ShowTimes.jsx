import Footer from "../Footer";
import Session from "./Session";
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading";

export default function ShowTimes() {

    const [sessoes, setSessoes] = useState(false);
    const [title, setTitle] = useState(false);
    const [poster, setPoster] = useState(false);
    const { idFilme } = useParams();

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        request.then(resposta => {
            setSessoes(resposta.data.days);
            setTitle(resposta.data.title);
            setPoster(resposta.data.posterURL);

        });
        request.catch(() => {
            alert(`ERRO NA REQUISIÇÃO DO FILME ${idFilme}`)
        });
    }, []);


    if (sessoes === false) {
        return (
            <Loading />
        )
    }

    return (
        <Container>
            <div className="centralize">
                <header>Selecione o filme</header>
                {sessoes.map(sessao => {
                    return (
                        <section>
                            <h1>{sessao.weekday} - {sessao.date}</h1>
                            {sessao.showtimes.map(show => {
                                return (<Session time={show.name} id={show.id}/>)
                            })}
                        </section>)
                })}
            </div>

            <Footer title={title} poster={poster}/>
        </Container>
    )
}

const Container = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 120px;

    .centralize{
        width: 325px;
    }
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
    h1{
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: center;
        letter-spacing: 0.02em;
        color: #293845;
    }
    button{
        width: 83px;
        height: 43px;
        background: #E8833A;
        border-radius: 3px;
        border: none;
        margin: 22px 8px 22px 0;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.02em;
        color: #FFFFFF;
    }
`;