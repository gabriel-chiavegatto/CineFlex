import styled from 'styled-components';

export default function Success(){
    return (
        <Container>
            <div>
                <header>Pedido feito com sucesso!</header>
                <section>
                    <h1> Filmes e sessão</h1>
                    <p>nomeFilmexxxxxx</p>
                    <p>dataHorarioXXXXXX</p>
                </section>
                <section>
                <h1> Ingressos</h1>
                    <p>Assento x</p>
                    <p>Assento Y</p>
                </section>
                <section>
                <h1> Comprador</h1>
                    <p>Nome: Fulano</p>
                    <p>CPF: xxxxx</p>
                </section>
                <article><button>Voltar pra Home</button></article>
                              
            </div>
        </Container>
    )
}

const Container = styled.main`

    width: 100%;
    display: flex;
    justify-content: center;

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