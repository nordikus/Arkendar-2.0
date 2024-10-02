import {useEffect, useState} from "react";
import { NavLink} from "react-router-dom";
import "./BrightNav.css"

export const BrightNav = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setIsMobile(window.innerWidth <= 768);
        });
    }, []);

    return (<nav className="BrightNav">
        {isMobile ? (<div>
            <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>☰</button>
        </div>) : (<ul>
            <li>
                <NavLink to="BrightLore">Лор</NavLink>
            </li>
            <li>
                <NavLink to="BrightHome">Общая информация</NavLink>
            </li>
            <li>
                <NavLink to="GimliShop">Лавка "У Гимли"</NavLink>
            </li>
        </ul>)}
        {isMobile && isOpen && (<ul className={isOpen ? 'open' : ''}>
                <li>
                    <NavLink to="BrightLore">Лор</NavLink>
                </li>
                <li>
                    <NavLink to="BrightHome">Общая информация</NavLink>
                </li>
                <li>
                    <NavLink to="GimliShop">Лавка "У Гимли"</NavLink>
                </li>
        </ul>)}
    </nav>);
};