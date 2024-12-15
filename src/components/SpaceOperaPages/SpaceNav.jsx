import {useEffect, useState} from "react";
import { NavLink} from "react-router-dom";
import "./SpaceNav.css"

export const SpaceNav = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setIsMobile(window.innerWidth <= 768);
        });
    }, []);

    return (<nav className="SpaceNav">
        {isMobile ? (<div>
            <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>☰</button>
        </div>) : (<ul>
            <li>
                <NavLink to="SpaceLore">Лор</NavLink>
            </li>
            <li>
                <NavLink to="SpaceHome">Общая информация</NavLink>
            </li>
        </ul>)}
        {isMobile && isOpen && (<ul className={isOpen ? 'open' : ''}>
            <li>
                <NavLink to="SpaceLore">Лор</NavLink>
            </li>
            <li>
                <NavLink to="SpaceHome">Общая информация</NavLink>
            </li>
        </ul>)}
    </nav>);
};