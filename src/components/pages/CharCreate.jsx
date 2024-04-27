import React, {useState} from 'react'
import './CharCreate.css';
import plus from './plusButton.png'
import minus from './minusButton.png'
import {Slider} from "./slider/slider"
import images from "./slider/images"

export function CharCreate() {
    const [level, setLevel] = useState(1);
    const [points, setPoints] = useState(level + 4);
    const [stats, setStats] = useState({
        strength: 0,
        agility: 0,
        intelligence: 0,
        constitution: 0,
        wisdom: 0,
    });

    const handleChange = (field, delta) => {
        if (points > 0 && delta > 0 || stats[field] > 0 && delta < 0) {
            setStats(prevStats => ({
                ...prevStats,
                [field]: prevStats[field] + delta,
            }));
            setPoints(prevPoints => prevPoints - delta);
        }
    };

    const handleLevelChange = (delta) => {
        setLevel(prevLevel => {
            const newLevel = Math.max(1, prevLevel + delta);
            if (newLevel > prevLevel) {
                setPoints(prevPoints => prevPoints + delta);
            } else if (newLevel < prevLevel) {
                setPoints(prevPoints => Math.max(newLevel, prevPoints + delta));
            }
            return newLevel;
        });
    };

    const handlePointsChange = (delta) => {
        setPoints(prevPoints => Math.max(level, prevPoints + delta));
    };

    const resetValues = () => {
        setLevel(1);
        setPoints(5);
        setStats({
            strength: 0,
            agility: 0,
            intelligence: 0,
            constitution: 0,
            wisdom: 0,
        });
    };

    return (
        <div className="CharCreateContainer">
            <div className="main-container">
                <div className='title-container' id="orange">
                    <h3><b>Создание персонажа</b></h3>
                </div>
            </div>
            <div>Нажимая на кнопки ниже вы можете менять характеристики и автоматически получать то на, что они влияют
            </div>
            <div className='slidstatcontain'>
                <div className='slider'>
                    <Slider>{images.map((image, index) => {
                        return <img key={index} src={image.imgURL} alt={image.imgAlt}/>;
                    })}</Slider>
                </div>
                <div className="statsContainer">
                    <div className="stats">
                        <div className="statRow">
                            <div>
                                <button onClick={() => handleLevelChange(-1)}><img src={minus}/></button>
                            </div>
                            <div>
                                <b>Уровень: {level}</b>
                            </div>
                            <div>
                                <button onClick={() => handleLevelChange(1)}><img src={plus}/></button>
                            </div>
                        </div>
                        <div className="statRow">
                            <div>
                                <button onClick={() => handlePointsChange(-1)}><img src={minus}/></button>
                            </div>
                            <div>
                                <b> Доступные очки для распределения: {points}</b>
                            </div>
                            <div>
                                <button onClick={() => handlePointsChange(1)}><img src={plus}/></button>
                            </div>
                        </div>
                        <div className="statRow">
                            <div>
                                <button onClick={() => handleChange('strength', -1)}><img src={minus} alt="minus"/>
                                </button>
                            </div>
                            <div>
                                <b>Сила: {stats.strength}</b>
                            </div>
                            <div>
                                <button onClick={() => handleChange('strength', 1)}><img src={plus} alt="plus"/>
                                </button>
                            </div>
                        </div>
                        <div className="statRow">
                            <div>
                                <button onClick={() => handleChange('agility', -1)}><img src={minus} alt="minus"/>
                                </button>
                            </div>
                            <div>
                                <b> ловкость:{stats.agility}</b>
                            </div>
                            <div>
                                <button onClick={() => handleChange('agility', 1)}><img src={plus} alt="plus"/></button>
                            </div>
                        </div>
                        <div className="statRow">
                            <div>
                                <button onClick={() => handleChange('constitution', -1)}><img src={minus} alt="minus"/>
                                </button>
                            </div>
                            <div>
                                <b> телосложение:{stats.constitution}</b>
                            </div>
                            <div>
                                <button onClick={() => handleChange('constitution', 1)}><img src={plus} alt="plus"/>
                                </button>
                            </div>
                        </div>
                        <div className="statRow">
                            <div>
                                <button onClick={() => handleChange('intelligence', -1)}><img src={minus} alt="minus"/>
                                </button>
                            </div>
                            <div>
                                <b> интеллект:{stats.intelligence}</b>
                            </div>
                            <div>
                                <button onClick={() => handleChange('intelligence', 1)}><img src={plus} alt="plus"/>
                                </button>
                            </div>
                        </div>
                        <div className="statRow">
                            <div>
                                <button onClick={() => handleChange('wisdom', -1)}><img src={minus} alt="minus"/>
                                </button>
                            </div>
                            <div>
                                <b> мудрость:{stats.wisdom}</b>
                            </div>
                            <div>
                                <button onClick={() => handleChange('wisdom', 1)}><img src={plus} alt="plus"/></button>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            <div className='resetButton'>
                                <button onClick={resetValues} id='purple'>CБРОСИТЬ ЗНАЧЕНИЯ</button>
                            </div>
                        </div>
                    </div>
                    <div className="param">
                        <div><b> Физ. урон: <span style={{color: 'orange'}}>{stats.strength * 5 + 5}</span></b></div>
                        <div><b>Маг. урон: <span style={{color: 'orange'}}>{stats.intelligence * 5}</span></b></div>
                        <div><b>ХП: <span style={{color: 'orange'}}>{stats.constitution * 50 + 50}</span></b></div>
                        <div><b>Выносливость: <span style={{color: 'orange'}}>{stats.constitution * 50 + 100}</span></b></div>
                        <div><b>Мана: <span style={{color: 'orange'}}>{stats.wisdom * 10}</span></b></div>
                        <div><b>Переносимый вес: <span style={{color: 'orange'}}>{stats.strength * 5 + stats.constitution * 0.5 + 2}</span></b></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
