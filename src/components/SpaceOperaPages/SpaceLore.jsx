import MStyles from "../../MainStyles.module.scss"
import React from "react";
import classNames from "classnames";
export const SpaceLore = () => {
    return (
        <div className={MStyles.homeMain}>
            <div className={MStyles.mainContainer}>
                <div className={classNames(MStyles.titleContainer,MStyles.orange)} >
                    <h4>Лор темного мира</h4>
                </div>
                <div className={MStyles.textContainer}>
                    <p>Галактика вечно расширяется, одни государства растут другие падают, сейчас к 2252 году представители разнообразных рас делят изведанную часть галактики на зоны влияния. В основном галактика поделена между 3 силами: Акронской федерацией насчитывающей около 20 империй старающихся ужится друг с другом, Древними угасшими империями что пришли в упадок и сейчас находятся в стагнации, а так же одиночными не желающими объединяться государствами</p>
                </div>
            </div>
        </div>
    )
}