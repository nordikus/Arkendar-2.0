import {Navbar} from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import './app.css';
import {Home, Rules, ForNew, Worlds, CharCreate} from "./components/Mainpages";
import {AbilitiesRules} from "./components/rulespages/AbilitiesRules";
import {CharacteristicsRules} from "./components/rulespages/CharacteristicsRules";
import {FightRules} from "./components/rulespages/FightRules";
import {SkillsRules} from "./components/rulespages/SkillsRules";
import {BrightMain} from "./components/BrightworldPages/BrightMain";
import {BrightHome} from "./components/BrightworldPages/BrightHome";
import {GimliShop} from "./components/BrightworldPages/GimliShop";
import {BrightLore} from "./components/BrightworldPages/BrightLore";
import Login from "./components/authentificationpages/Login";
import Registration from "./components/authentificationpages/Registration";
import {Profile} from "./components/authentificationpages/Profile";

function App() {
    return (<div className="App">
            <header>
                <Navbar/>
            </header>
            <main>
                <Routes>
                    <Route path="/ForNew" element={<ForNew/>}/>
                    <Route path="/Worlds" element={<Worlds/>}/>
                    <Route path="/Worlds/BrightMain" element={<BrightMain/>}>
                        <Route path="BrightLore" element={<BrightLore/>}/>
                        <Route path="BrightHome" element={<BrightHome/>}/>
                        <Route path="GimliShop" element={<GimliShop/>}/>
                    </Route>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Rules" element={<Rules/>}/>
                    <Route path="/Rules/AbilitiesRules" element={<AbilitiesRules/>}/>
                    <Route path="/Rules/CharacteristicsRules" element={<CharacteristicsRules/>}/>
                    <Route path="/Rules/FightRules" element={<FightRules/>}/>
                    <Route path="/Rules/SkillsRules" element={<SkillsRules/>}/>
                    <Route path="/CharCreate" element={<CharCreate/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/Register" element={<Registration/>}/>
                    <Route path="/users/:username" element={<Profile />} />
                </Routes>
            </main>
            <footer>
                <div><p>Главный Разработчик и гм ТБ</p></div>
            </footer>
        </div>);
}

export default App;
