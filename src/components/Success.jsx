import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading';

export default function Success(props) {
    const { reserva, detalhes } = props;
    console.log(detalhes);

    const [sucesso, setSucesso] = useState(false);

    useEffect(() => {
        console.log('tentando postar...')
        const post = axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', reserva);
        post.then(() => {
            console.log('postou');
            setSucesso(true);
        });
        post.catch(() => alert('ERRO NA RESERVA, TENTE NOVAMENTE'));
    }, []);

    return (

        <Container>
            {(sucesso) ?
                (<div>
                    <header>Pedido feito com sucesso!</header>
                    <section>
                        <h1> Filmes e sessão</h1>
                        <p>{detalhes.title}</p>
                        <p>{detalhes.day} {detalhes.time}</p>
                    </section>
                    <section>
                        <h1> Ingressos</h1>
                        {detalhes.numSeats.map(item => {
                            return (<p>Assento {item}</p>)
                        })}
                    </section>
                    <section>
                        <h1> Comprador</h1>
                        <p>Nome: {reserva.name}</p>
                        <p>CPF: {reserva.cpf}</p>
                    </section>
                    <article><Link to="/"><button>Voltar pra Home</button></Link></article>

                </div>) :
                (<Loading />)

            }
        </Container>
    )
}

const Container = styled.main`

    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 120px;

    header{
        width: 100%;
        height: 130px;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;
        color: #247A6B;
        padding: 0 20% 0 20%;
    }
    section{
        width: 100%;
        padding: 0 0 45px 0;
    }
    h1{
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #293845;
        margin-bottom: 9px;
    }
    p{
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        letter-spacing: 0.04em;
        color: #293845;
        padding-top: 2px;
    }
    article{
        width: 100%;
        display: flex;
        justify-content: center;
        padding-top: 40px;
    }
    button{
        width: 225px;
        height: 42px;
        background: #E8833A;
        border-radius: 3px;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.04em;
        color: #FFFFFF;
        border: none;
        
    }
`;