import styled from 'styled-components';
import Footer from './Footer';
export default function Seats() {



    return (
        <Container>
            <div className='centralize'>
                <header>Selecione o(s) assento(s)</header>
                <section>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
                    <button>5</button>
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
                <Forms>
                    <h2>Nome do comprador:</h2>
                    <input placeholder='Digite seu nome...'/>
                    <h2>CPF do comprador:</h2>
                    <input placeholder='Digite seu CPF...'/>
                </Forms>
                <Footer />
            </div>
        </Container>
    )
}
const Container = styled.main`

    width: 100%;
    display: flex;
    justify-content: center;
    
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
    button{
        width: 26px;
        height: 26px;
        background: #C3CFD9;
        border: 1px solid #808F9D;
        border-radius: 12px;
        margin: 0 3.5px 16px 3.5px;
    }
    .selecionado{
        background: #8DD7CF;
        border: 1px solid #1AAE9E;
    }
    .indisponivel{
        background: #FBE192;
        border: 1px solid #F7C52B;
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
    }
`;
const Forms = styled.section`
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
    }
`;