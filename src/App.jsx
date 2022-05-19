
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Main from "./components/main/Main";
import ShowTimes from './components/ShowTimes.jsx';
import Seats from './components/main/Seats';
import Success from './components/Success';


export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/show" element={<ShowTimes />} />
                <Route path='/seats' element={<Seats />}/>
                <Route path="/success" element={<Success />} />
            </Routes>
        </BrowserRouter>
    )
}