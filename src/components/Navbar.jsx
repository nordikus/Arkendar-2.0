import logo from './Logo.svg';
import "./Navbar.css";
import {Link, NavLink} from "react-router-dom";
import {useEffect, useState} from "react";

export const Navbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setIsMobile(window.innerWidth <= 768);
        });
    }, []);

    return (<nav>
            {isMobile ? (<div className="logo-mobile">
                    <img className="logo" alt={"logo"} src={logo}/>
                    <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>☰</button>
                </div>) : (<ul>
                    <li>
                        <NavLink to="/ForNew">ДЛЯ НОВОПРИБЫВШИХ</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Worlds">МИРЫ</NavLink>
                    </li>
                    <li>
                        <Link to="/">
                            <img className="logo" alt={"logo"} src={logo}/>
                        </Link>
                    </li>
                    <li>
                        <NavLink to="/Rules">ПРАВИЛА</NavLink>
                    </li>
                    <li>
                        <NavLink to="/CharCreate">СОЗДАНИЕ ПЕРСОНАЖА</NavLink>
                    </li>
                </ul>)}
            {isMobile && isOpen && (<ul className={isOpen ? 'open' : ''}>
                    <li>
                        <NavLink to="/">Главная страница</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ForNew">Для новоприбывших</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Worlds">Миры</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Rules">Правила</NavLink>
                    </li>
                    <li>
                        <NavLink to="/CharCreate">Создание персонажа</NavLink>
                    </li>
                </ul>)}
        </nav>);
};