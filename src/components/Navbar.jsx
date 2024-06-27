import logo from './Logo.png';
import DefaultAccountImage from './DefAccImg.png';
import "./NavbarsComon.css";
import "./MainNav.css"
import {Link, NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import {logout, selectAuth} from "../redux/authSlice";
import {useDispatch, useSelector} from "react-redux";


export const Navbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener("resize", () => {
            setIsMobile(window.innerWidth <= 768);
        });
    }, []);

    const isAuthenticated = useSelector(selectAuth).isAuthenticated;

    const {user} = useSelector(selectAuth);

    const username = user ? user.username : '';
    const decodedUsername = decodeURIComponent(username);
    return (<nav className="MainNav">
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
                <NavLink to="/CharCreate">КАЛЬКУЛЯТОР ХАРАКТЕРИСТИК</NavLink>
            </li>
            <li className="login-section">
                {isAuthenticated ? (
                    <>
                        <img className="DefAccImg" alt={"DefaultAccountImage"} src={DefaultAccountImage}/>
                        <div>
                            <NavLink to={`/users/${decodedUsername}`}>{username}</NavLink>
                            <button className="LogOutbutton" onClick={() => {
                                dispatch(logout());
                            }}>Выйти из аккаунта
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <img className="DefAccImg" alt={"DefaultAccountImage"} src={DefaultAccountImage}/>
                        <div>
                            <NavLink to="/Login">Вход</NavLink>
                            <NavLink to="/Register">Регистрация</NavLink>
                        </div>
                    </>
                )}
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
                <NavLink to="/CharCreate">Калькулятор характеристик</NavLink>
            </li>
            {isAuthenticated ? (
                <>
                    <li>
                        <NavLink to={`/users/${decodedUsername}`}>{username}</NavLink>
                    </li>
                    <li>
                        <button className="LogOutbutton" onClick={() => {
                            dispatch(logout());
                        }}><div>Выйти из аккаунта</div>
                        </button>
                    </li>
                </>
            ) : (
                <>
                    <li>
                        <NavLink to="/Login">Вход</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Register">Регистрация</NavLink>
                    </li>
                </>
            )}

        </ul>)}
    </nav>);
};