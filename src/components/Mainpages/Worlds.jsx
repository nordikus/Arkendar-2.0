import React from "react";
import './worlds.css'
import MStyles from "../../MainStyles.module.scss"
import classNames from "classnames";
import {useNavigate} from "react-router-dom";
export const Worlds = () => {
    const navigate= useNavigate();
    return <div className={MStyles.homeMain} id='worldsPage'>
        <div className="circle-container">
            <div className="worldContainer">
            <div className="circle" id='bright' onClick={()=> navigate('BrightMain/BrightHome')}>
            </div>
                <div className={classNames(MStyles.titleContainer,MStyles.purple)}>Светлый мир</div>
            </div>
            <div className="worldContainer">
            <div className="circle" id='dark'></div>
                <div className={classNames(MStyles.titleContainer,MStyles.purple)}>Темный мир</div>
                </div>
            <div className="worldContainer">
            <div className="circle" id='space'></div>
                <div className={classNames(MStyles.titleContainer,MStyles.purple)}>Космоопера</div>
            </div>
        </div>
    </div>
};