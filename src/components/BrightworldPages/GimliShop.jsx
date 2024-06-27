import MStyles from "../../MainStyles.module.scss"
import "./gimlishop.css"
import Gimli from "./gimli.jpg"
import Dice from "./Dice.png"
import {useState} from "react";
import classNames from "classnames";
import store from '../../redux/store'

export const GimliShop = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const artifacts = store.getState().GimliArtifacts.artifacts;
    console.log(artifacts);
    const filteredProducts = artifacts.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return (
        <div>
            <div className="InfoRowContainer">
                <div className={MStyles.ImageTextContainerBright}>
                    <img src={Gimli}></img>
                    <p>-Здравствуйте друзья и подруги, давно не виделись, наконец я создал... Как его ах да "сайт" и
                        теперь вы можете смотреть мои прекрасные изделия, прицениваться к ним и делать заказы или
                        если
                        найдёте похожее творение сразу знать его свойства.
                        <hr/>
                        <span>Артефактор Гимли</span>
                    </p>
                </div>
                <div className="DiceAndSearch">
                    <div className={MStyles.ImageTextContainerBright}>
                        <img src={Dice}></img>
                        <p>Лучший покупатель и друг</p>
                    </div>
                    <div className={classNames(MStyles.justBrightContainer, "SearchArt")}>
                        <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
                               placeholder="Поиск по наименованию"/>
                    </div>
                </div>
            </div>
            <div className="products-container">
                {filteredProducts.map((item, index) => (
                    <div key={index} className={classNames(MStyles.justBrightContainer, "product")}>
                        <img src={process.env.PUBLIC_URL+item.image} alt={item.name} width="230px" height="230px"/>
                        <h2>{item.name}</h2>
                        <span className="cost">{item.cost} золотых</span>
                        <p>{item.description}</p>
                        <p>Вес: {item.weight} </p>
                    </div>
                ))}
            </div>
        </div>
    )
}


