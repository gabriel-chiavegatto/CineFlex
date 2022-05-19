import Footer from "./main/Footer";
import styled from 'styled-components';

export default function ShowTimes() {
    return (
        <Container>
            <div className="centralize">
                <header>Selecione o filme</header>
                <section>
                    <h1>Horario1-taldia-talhora</h1>
                    <button>hora1</button>
                    <button>hora2</button>
                </section>
                <section>
                    <h1>Horario1-taldia-talhora</h1>
                    <button>hora1</button>
                    <button>hora2</button>
                </section>
            </div>

            <Footer />
        </Container>
    )
}

const Container = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;

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