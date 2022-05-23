import styled from 'styled-components';
import Footer from '../Footer';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import EachSeat from './EachSeat';
import axios from 'axios';
import Forms from './Forms';


export default function Seats() {

    const { idSessao } = useParams();
    const [lista3, setLista3] = useState([]);
    const [title, setTitle] = useState("");
    const [day, setDay] = useState("");
    const [time, setTime] = useState("");
    const [poster, setPoster] = useState("");
    const [mySeats, setMySeats] = useState([]);
    // const [seat, setSeat] = useState(false);

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promisse.then(resposta => {
            console.log(resposta);
            console.log(resposta.data.seats);
            setLista3(resposta.data.seats);
            setTitle(resposta.data.movie.title);
            setDay(resposta.data.day.weekday);
            setTime(resposta.data.name);
            setPoster(resposta.data.movie.posterURL);
        });
        promisse.catch(resposta => {
            console.log(resposta);
            alert('ERRO NA REQUISIÇÃO DOS ASSENTOS, TENTE NOVAMENTE');
        });
    }, []);

    return (
        <Container>
            <div className='centralize'>
                <header>Selecione o(s) assento(s)</header>
                <section>
                    {(lista3 === "") ?
                        (<></>) :
                        (lista3.map(seat => {
                            return (
                                <EachSeat id={seat.id} num={seat.name} status={seat.isAvailable} key={seat.id} mySeats={mySeats} setMySeats={setMySeats}/>
                            )
                        }))
                    }
                </section>
                <Examples>
                    <div>
                        <p><button className='selecionado'></button></p>
                        <p>Selecionado</p>
                    </div>
                    <div>
                        <p><button className='disponivel'></button></p>
                        <p>Disponível</p>
                    </div>
                    <div>
                        <p><button className='indisponivel'></button></p>
                        <p>Indisponível</p>
                    </div>
                </Examples>
                <Forms />
                <div className='reservar'><button>Reservar assento(s)</button></div>
                <Footer title={title} poster={poster} day={day} showTime={time} />
            </div>
        </Container>
    )
}
const Container = styled.main`

    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 117px;
    
    .centralize{
        width: 334px;
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
    section{
        display: flex;
        flex-wrap: wrap;
    }
    .disponivel{
        background: #C3CFD9;
        border: 1px solid #808F9D;
    }
    .indisponivel{
        background: #FBE192;
        border: 1px solid #F7C52B;
    }
    .selecionado{
        background: #8DD7CF;
        border: 1px solid #1AAE9E;
    }

    .reservar{
        width: 100%;
        display: flex;
        justify-content: center;
        padding-top: 20px;
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
    }

`;
const Examples = styled.section`
    justify-content: space-around;
    
    p{
        text-align: center;
        color: #4E5A65;
        font-size: 13px;
        line-height: 15px;
        letter-spacing: -0.013em;
    }
    button{
        margin-bottom: 3px;
        width: 26px;
        height: 26px;
        border-radius: 12px;
        margin: 0 3.5px 16px 3.5px;
    }
`;