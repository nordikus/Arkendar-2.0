import MStyles from "../../MainStyles.module.scss"
import React from "react";
import classNames from "classnames";
export const DarkLore = () => {
    return (
        <div className={MStyles.homeMain}>
            <div className={MStyles.mainContainer}>
                <div className={classNames(MStyles.titleContainer,MStyles.orange)} >
                    <h4>Лор темного мира</h4>
                </div>
                <div className={MStyles.textContainer}>
                    <p>Мало что известно, о том каким этот мир был когда-то, в древних сказаниях говорят о том, что в один момент буд-то бы вся краса его покинула и прекрасные луга, тихие леса, ледяные горы и жаркие пески заполонили монстры. Живущих уход света тоже не оставил в стороне, люди создали инквизицию что борется со всем темным и стали ещё хуже относится к прочим расам, эльфы изолировались ещё больше лишь зверолюды и дворфы кажется остались теже, однако в то время как у первых есть личные междоусобицы и вторых разыгрались неимоверные жадность и алкоголизм</p>
                </div>
            </div>
        </div>
    )
}