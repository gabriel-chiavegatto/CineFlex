import ReactDom from "react-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import './assets/reset.css';
import './assets/style-root.css'

function App() {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
}

ReactDom.render(<App />, document.querySelector('.root'));