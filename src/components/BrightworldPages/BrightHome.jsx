import MStyles from "../../MainStyles.module.scss"
import BrightHomeIcon from "./BrightHomeIcon.png"
import React from "react";
export const BrightHome = () => {
    return (
        <div className={MStyles.homeMain}>
        <div className={MStyles.mainContainer}>
        <div className={MStyles.ImageContainer} >
            <img src={BrightHomeIcon}/>
        </div>
        <div className={MStyles.textContainerBright}>
            <p>
               Светлый мир это мир мультивселенной, здесь практически нет ограничений и сделать можно любого персонажа
            </p>
        </div>
    </div>
        </div>
       )
}
