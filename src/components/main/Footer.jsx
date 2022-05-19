import styled from 'styled-components';
import IMGtest from '../../assets/images/image-capa3.png';
export default function Footer() {
    return (
        <YourSession>

            <section> <img src={IMGtest} alt='capa-escolhida' /> </section>
            <article>
                <div>
                    <p>nomeDUfilme</p>
                    <p>dia&hora</p>
                </div>
            </article>
        </ YourSession>
    )
}

const YourSession = styled.div`

    width: 100%;
    display: flex;

    section{
        width: 64px;
        height: 89px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 14px 0 10px;
    }
    img{
        width: 48px;
        height: 72px;
    }
    article{
        display: flex;
        align-items: center;
        font-size: 26px;
        line-height: 30px;
        color: #293845;
    }

`;
