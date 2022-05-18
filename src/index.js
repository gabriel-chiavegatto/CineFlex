import ReactDom from "react-dom";
import Header from "./components/Header";
import Main from "./components/main/Main";
import './assets/css/reset.css';
import './assets/css/style-root.css';


function App() {
    return (
        <>
            <Header />
            <Main />
        </>
    )
}

ReactDom.render(<App />, document.querySelector('.root'));