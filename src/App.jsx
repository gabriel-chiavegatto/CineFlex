
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Main from "./components/main/Main";
import ShowTimes from './components/showtimes/ShowTimes.jsx';
import Seats from './components/seats/Seats';
import Success from './components/Success';
import { useState } from 'react';


export default function App() {

    const [reserva, setReserva] = useState([]);
    const [detalhes, setDetalhes] = useState({});

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/sessoes/:idFilme" element={<ShowTimes />} />
                <Route path='/assentos/:idSessao' element={<Seats setReserva={setReserva} setDetalhes={setDetalhes}/>} />
                <Route path="/success" element={<Success reserva={reserva} detalhes={detalhes}/>} />
            </Routes>
        </BrowserRouter>
    )
}