import MStyles from "../../MainStyles.module.scss"
import React from "react";
import DarkHomeIcon from "./DarkHomeIcon.png"
export const DarkHome = () => {
    return (
        <div className={MStyles.homeMain}>
            <div className={MStyles.mainContainer}>
                <div className={MStyles.ImageContainer} >
                    <img src={DarkHomeIcon}/>
                </div>
                <div className={MStyles.textContainerBright}>
                    <p>
                        Темный мир это мир серого фэнтези, нет ничего светлого либо темного только серое. Даже самый добропорядочный гражданин может оказаться с множеством скелетов в шкафу. За пределами городов опасно из-за обилия монстров, а прокачка идет куда медленнее.
                    </p>
                </div>
            </div>
        </div>
    )
}
