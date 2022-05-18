
import Footer from "../footer/Footer";
import MovieCover from "./MovieCover"
import "./main.css"

export default function Main() {
    return (
        <div className="container">
            <div>
                <header>Selecione o filme</header>
                <section className="catalogo-de-filmes">
                    <div><MovieCover /></div>
                    <div><MovieCover /></div>
                    <div><MovieCover /></div>
                    <div><MovieCover /></div>
                    <div><MovieCover /></div>
                    <div><MovieCover /></div>
                </section>
                <Footer />
            </div>
        </div>
    )
}