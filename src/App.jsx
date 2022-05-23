
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Main from "./components/main/Main";
import ShowTimes from './components/ShowTimes.jsx';
import Seats from './components/main/Seats';
import Success from './components/Success';


// const [capas, setCapas] = React.useState('');



export default function App() {


    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/sessoes/:idFilme" element={<ShowTimes />} />
                <Route path='/assentos/:idSessao' element={<Seats />} />
                <Route path="/success" element={<Success />} />
            </Routes>
        </BrowserRouter>
    )
}