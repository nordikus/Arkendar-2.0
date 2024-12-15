import React from "react";
import './worlds.css'
import MStyles from "../../MainStyles.module.scss"
import classNames from "classnames";
import {useNavigate} from "react-router-dom";

export const Worlds = () => {
    const navigate = useNavigate();
    return <div className={MStyles.homeMain} id='worldsPage'>
        <div className={MStyles.mainContainer}>
            <div className={classNames(MStyles.titleContainer, MStyles.orange)}>
                <h4>Миры</h4>
            </div>
            <div className={MStyles.textContainer}>
                <p>На этой странице при нажатии на изображение мира можно переместиться в него дабы узнать необходимую
                    информацию
                </p>
            </div>
        </div>
        <div className="circle-container">
            <div className="worldContainer">
                <div className="circle" id='bright' onClick={() => navigate('BrightMain/BrightHome')}>
                </div>
                <div className={classNames(MStyles.titleContainer, MStyles.purple)}
                     onClick={() => navigate('BrightMain/BrightHome')}>Светлый мир
                </div>
            </div>
            <div className="worldContainer">
                <div className="circle" id='dark' onClick={() => navigate('DarkMain/DarkHome')}></div>
                <div className={classNames(MStyles.titleContainer, MStyles.purple)}
                     onClick={() => navigate('DarkMain/DarkHome')}>Темный мир
                </div>
            </div>
            <div className="worldContainer">
                <div className="circle" id='space' onClick={() => navigate('SpaceMain/SpaceHome')}></div>
                <div className={classNames(MStyles.titleContainer, MStyles.purple)}
                     onClick={() => navigate('SpaceMain/SpaceHome')}>Космоопера
                </div>
            </div>
        </div>
    </div>
};