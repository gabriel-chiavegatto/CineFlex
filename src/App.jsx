
import Header from "./components/Header";
import Main from "./components/main/Main";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </BrowserRouter>
    )
}