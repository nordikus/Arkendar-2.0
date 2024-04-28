import {Navbar} from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import './app.css';
import {Home, Rules, ForNew, Worlds, CharCreate} from "./components/pages";


function App() {
    return (<div className="App">
            <header>
                <Navbar/>
            </header>
            <main>
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
