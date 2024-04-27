import {Navbar} from "./components/Navbar";
import {Route, Routes, useLocation} from "react-router-dom";
import './app.css';
import {Home, Rules, ForNew, Worlds, CharCreate} from "./components/pages";


function App() {
    const location = useLocation();
    const background = location.pathname === "/ForNew" ? "url('ForNew.jpg')" : location.pathname === "/Worlds" ? "url('worlds-banner.jpg')" : location.pathname === "/" ? "url('./home-banner.jpg')" : location.pathname === "/Rules" ? "linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url('rules-banner.jpg')" : location.pathname === "/CharCreate" ? "url('charCreate.jpg')" : "white";
    return (<div className="App">
            <header>
                <Navbar/>
            </header>
            <main style={{backgroundImage: background}}>
                <Routes>
                    <Route path="/ForNew" element={<ForNew/>}/>
                    <Route path="/Worlds" element={<Worlds/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Rules" element={<Rules/>}/>
                    <Route path="/CharCreate" element={<CharCreate/>}/>
                </Routes>
            </main>
            <footer>
                <div><p>Главный Разработчик и гм ТБ</p></div>
            </footer>
        </div>);
}

export default App;
