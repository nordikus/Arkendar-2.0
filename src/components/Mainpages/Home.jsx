import './home.css'
import {readNews} from "./news.utils";
import {useEffect, useState} from "react";
import MStyles from "../../MainStyles.module.scss"
import classNames from 'classnames';
export const Home = () => {

    const [news, setNews] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            const newsData = await readNews();
            setNews(newsData);
        };

        fetchNews();
    }, []);

    return <div className={MStyles.homeMain} id='mainPage'>
        <div className={MStyles.mainContainer}>
            <div className={classNames(MStyles.titleContainer,MStyles.orange)}>
                <h4>Здравствуй, заблудшая душа!</h4>
                </div>
                <div className={MStyles.textContainer}>
                    <p>Старик в мантии, сидящий за столом из дорогого дерева со стоящим рядом бутылем вина смотрит на вас и на открытую книгу.
                    </p>
                    <p>
                        - Итак ты прибыл сюда ради перехода куда-то в другое место? Скрыться от проблем, почувствовать себя кем-то необычным. Даже если это не так и ты здесь лишь на время я рад этому, всегда приятно видеть новые лица. Но если ты все же готов переступить через грань то тебе откроются огромные возможности: Стать дворфом, что потягивает пиво в крепости и унижает эльфов за отсутствие чести и пива, великим магом что одним движением руки способен как убить так и вернуть из мертвых, бороздить просторы космоса на личном корабле, или может просто торговать как представитель ушлой мегакорпорации… Нужно лишь захотеть и переступить порог… Моей вселенной... Я могу отправить тебя куда угодно, в моей библиотеке множество миров за историями которых я слежу, может быть и тебе достанется пара строк или может даже целая глава...
                    </p>
                </div>
            </div>
        <div className={MStyles.mainContainer}>
            <div className={classNames(MStyles.titleContainer,MStyles.purple)} id='purple'><h4>Новости</h4></div>
                <div className={MStyles.textContainer}>
                {news && news.map((item, index) => <p key={index}>{item.message}</p>)}
            </div>
        </div>
    </div>;
};