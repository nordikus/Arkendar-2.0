import MStyles from "../../MainStyles.module.scss"
import React from "react";
import SpaceHomeIcon from "./SpaceHomeIcon.png"
export const SpaceHome = () => {
    return (
        <div className={MStyles.homeMain}>
            <div className={MStyles.mainContainer}>
                <div className={MStyles.ImageContainer} >
                    <img src={SpaceHomeIcon}/>
                </div>
                <div className={MStyles.textContainerBright}>
                    <p>
                        Мир космооперы это мир в котором вы можете окунуться в фантастику и романтику исследования бескрайнего космоса, либо при желании устроиться в корпорацию или ещё какую организацию действуя на колонизированных планетах
                    </p>
                </div>
            </div>
        </div>
    )
}
