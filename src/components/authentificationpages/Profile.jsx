import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {selectAuth} from "../../redux/authSlice";
import MStyles from "../../MainStyles.module.scss";
import "./profile.css";
import classNames from "classnames";
export const Profile = () => {
    const isAuthenticated = useSelector(selectAuth).isAuthenticated;
    const {user} = useSelector(selectAuth);

    const itemCategories = ["misc", "weapon", "armor", "accessories", "consumables" ];
    const [newItem, setNewItem] = useState({
        name: "",
        description: "",
        weight: "",
        category: "misc",
        physicalDamage: "",
        magicDamage: "",
        physicalArmor: "",
        magicArmor: ""
    });
    const [newAbility, setNewAbility] = useState({
        name: "", description: "", cooldown: "", cost: "",
    });

    const updateCharacterName = (index, value) => {
        const updatedCharacters = [...characters];
        updatedCharacters[index].name = value;
        setCharacters(updatedCharacters);
    };
    const [characters, setCharacters] = useState(() => {
        if (!user || !user.username) return [];
        const savedCharacters = localStorage.getItem(`characters_${user.username}`);
        return savedCharacters ? JSON.parse(savedCharacters) : [];
    });

    const [expandedCharacters, setExpandedCharacters] = useState({});

    useEffect(() => {
        if (user && user.username) {
            localStorage.setItem(`characters_${user.username}`, JSON.stringify(characters));
        }
    }, [characters, user]);
    console.log("Characters: ", characters);

    // Словари для отображения названий полей на русском
    const statDisplayNames = {
        strength: "Сила",
        dexterity: "Ловкость",
        intelligence: "Интеллект",
        constitution: "Телосложение",
        wisdom: "Мудрость",
    };

    const paramDisplayNames = {
        health: "Здоровье",
        stamina: "Выносливость",
        mana: "Мана",
        carryWeight: "Переносимый вес",
        physicalDamage: "Физический урон",
        magicDamage: "Магический урон",
        physicalArmor: "Физическая броня",
        magicArmor: "Магическая броня"
    };

    // Вычисление итогового значения параметра с учетом характеристик и бонусов
    const calculateParameterValue = (char, param) => {
        const {strength, constitution, wisdom, intelligence} = char.stats;
        const baseValue = {
            health: constitution.base * 50 + 50,
            stamina: constitution.base * 50 + 100,
            mana: wisdom.base * 10,
            carryWeight: strength.base * 5 + constitution.base * 0.5 + 2,
            physicalDamage: strength.base * 5,
            magicDamage: intelligence.base * 5,
            physicalArmor: 0,
            magicArmor: 0
        }[param];

        const bonus = char.parameters[param].bonus;
        const equipmentBonus = char.parameters[param].equipmentBonus;
        return baseValue + bonus + equipmentBonus;
    };

    const toggleExpandCharacter = (index) => {
        setExpandedCharacters((prev) => ({
            ...prev, [index]: !prev[index],
        }));
    };

    // Функция добавления нового персонажа
    const addCharacter = () => {
        const newCharacter = {
            name: `Персонаж #${characters.length + 1}`, gender: "неизвестен", race: "неизвестна", level: 1, stats: {
                strength: {base: 0, bonus: 0},
                dexterity: {base: 0, bonus: 0},
                intelligence: {base: 0, bonus: 0},
                constitution: {base: 0, bonus: 0},
                wisdom: {base: 0, bonus: 0}
            }, parameters: {
                health: {base: 50, bonus: 0, equipmentBonus: 0},
                stamina: {base: 100, bonus: 0, equipmentBonus: 0},
                mana: {base: 0, bonus: 0, equipmentBonus: 0},
                carryWeight: {base: 2, bonus: 0, equipmentBonus: 0},
                physicalDamage: {base: 0, bonus: 0, equipmentBonus: 0},
                magicDamage: {base: 0, bonus: 0, equipmentBonus: 0},
                physicalArmor: {base: 0, bonus: 0, equipmentBonus: 0},
                magicArmor: {base: 0, bonus: 0, equipmentBonus: 0}
            }, inventory: {
                weapon: [], armor: [], accessories: [], consumables: [], misc: []
            }, abilities: [],
        };
        setCharacters([...characters, newCharacter]);
    };


    const addAbilityToCharacter = (index) => {
        const updatedCharacters = [...characters];
        const ability = {
            name: newAbility.name,
            description: newAbility.description,
            cooldown: parseInt(newAbility.cooldown),
            cost: parseInt(newAbility.cost),
        };

        updatedCharacters[index].abilities.push(ability);
        setCharacters(updatedCharacters);
        resetNewAbilityForm();
    };

    // Функция сброса формы добавления способности
    const resetNewAbilityForm = () => {
        setNewAbility({
            name: "", description: "", cooldown: "", cost: "",
        });
    };

    // Обработчик изменений в полях способности
    const handleAbilityInputChange = (field, value) => {
        setNewAbility((prev) => ({...prev, [field]: value}));
    };


    const updateCharacterStat = (index, stat, value) => {
        const updatedCharacters = [...characters];
        updatedCharacters[index].stats[stat].base = Math.max(0, value);
        setCharacters(updatedCharacters);
    };

    const updateCharacterStatBonus = (index, stat, value) => {
        const updatedCharacters = [...characters];
        updatedCharacters[index].stats[stat].bonus = parseInt(value);
        setCharacters(updatedCharacters);
    };

    const updateCharacterParamBonus = (index, param, value) => {
        const updatedCharacters = [...characters];
        updatedCharacters[index].parameters[param].bonus = parseInt(value);
        setCharacters(updatedCharacters);
    };


    // Функция для добавления предмета в инвентарь
    const addItemToInventory = (index) => {
        const updatedCharacters = [...characters];
        const item = {
            name: newItem.name, description: newItem.description, weight: parseFloat(newItem.weight), equipped: false
        };

        if (newItem.category === "Weapon") {
            item.physicalDamage = parseFloat(newItem.physicalDamage);
            item.magicDamage = parseFloat(newItem.magicDamage);
        } else if (newItem.category === "Armor") {
            item.physicalArmor = parseFloat(newItem.physicalArmor);
            item.magicArmor = parseFloat(newItem.magicArmor);
        }

        updatedCharacters[index].inventory[newItem.category].push(item);

        const totalWeight = calculateTotalWeight(updatedCharacters[index]);
        if (totalWeight > calculateParameterValue(updatedCharacters[index], 'carryWeight')) {
            alert("Перегруз! Вес инвентаря превышает переносимый.");
        }


        setCharacters(updatedCharacters);
        resetNewItemForm();
    };

    const toggleEquipItem = (charIndex, category, itemIndex) => {
        const updatedCharacters = [...characters];
        const item = updatedCharacters[charIndex].inventory[category][itemIndex];
        item.equipped = !item.equipped;

        const equipmentBonus = updatedCharacters[charIndex].parameters;

        if (item.equipped) {
            if (category === "weapon") {
                equipmentBonus["physicalDamage"].equipmentBonus += item.physicalDamage || 0;
                equipmentBonus["magicDamage"].equipmentBonus += item.magicDamage || 0;
            } else if (category === "armor") {
                equipmentBonus["physicalArmor"].equipmentBonus += item.physicalArmor || 0;
                equipmentBonus["magicArmor"].equipmentBonus += item.magicArmor || 0;
            }
        } else {
            if (category === "weapon") {
                equipmentBonus["physicalDamage"].equipmentBonus -= item.physicalDamage || 0;
                equipmentBonus["magicDamage"].equipmentBonus -= item.magicDamage || 0;
            } else if (category === "armor") {
                equipmentBonus["physicalArmor"].equipmentBonus -= item.physicalArmor || 0;
                equipmentBonus["magicArmor"].equipmentBonus -= item.magicArmor || 0;
            }
        }

        setCharacters(updatedCharacters);
    };
    const resetNewItemForm = () => {
        setNewItem({
            name: "",
            description: "",
            weight: "",
            category: "weapon",
            physicalDamage: "",
            magicDamage: "",
            physicalArmor: "",
            magicArmor: ""
        });
    };

    const handleInputChange = (field, value) => {
        setNewItem((prev) => ({...prev, [field]: value}));
    };

    const calculateTotalWeight = (char) => {
        return itemCategories.reduce((total, category) => {
            return total + char.inventory[category].reduce((sum, item) => sum + item.weight, 0);
        }, 0);
    };

    if (!isAuthenticated) {
        return <p>Пожалуйста, войдите в систему.</p>;
    }

    return (<div className={MStyles.homeMain} id="Profile">
            <div className={classNames(MStyles.justContainer, "ProfileContainer")}>
                <h1>Профиль пользователя: {user.username}</h1>
                <p>Email: {user.email}</p>

                <button onClick={addCharacter}>Создать персонажа</button>

                <div className='character-list'>
                    <h2>Список персонажей</h2>
                    {(characters && characters.length > 0) ? (characters.map((char, index) => (
                            <div key={index} className="characterCard">
                                <div className="characterHeader">
            <span onClick={() => toggleExpandCharacter(index)} className="toggleButton">
                {expandedCharacters[index] ? "▼" : "▶"}
            </span>
                                    {expandedCharacters[index] ? (<input
                                            type="text"
                                            value={char.name}
                                            onChange={(e) => updateCharacterName(index, e.target.value)}
                                            className="editableCharacterName"
                                        />) : (<span>{char.name}</span>)}
                                    <button onClick={() => setCharacters(characters.filter((_, i) => i !== index))}>
                                        Удалить
                                    </button>
                                </div>

                                {expandedCharacters[index] && (<div>
                                        <div className="characterDetails">
                                            <label>Пол:</label>
                                            <input
                                                type="text"
                                                value={char.gender}
                                                onChange={(e) => {
                                                    const updatedCharacters = [...characters];
                                                    updatedCharacters[index].gender = e.target.value;
                                                    setCharacters(updatedCharacters);
                                                }}
                                                placeholder="Пол"
                                            />
                                            <label>Раса:</label>
                                            <input
                                                type="text"
                                                value={char.race}
                                                onChange={(e) => {
                                                    const updatedCharacters = [...characters];
                                                    updatedCharacters[index].race = e.target.value;
                                                    setCharacters(updatedCharacters);
                                                }}
                                                placeholder="Раса"
                                            />
                                            <label>Уровень:</label>
                                            <input
                                                type="number"
                                                value={char.level}
                                                onChange={(e) => {
                                                    const updatedCharacters = [...characters];
                                                    updatedCharacters[index].level = parseInt(e.target.value);
                                                    setCharacters(updatedCharacters);
                                                }}
                                                placeholder="Уровень"
                                                min="1"
                                            />
                                        </div>


                                        {/* Характеристики */}
                                    <h4>Характеристики</h4>
                                        <div className="characterStats">
                                            {Object.keys(char.stats).map((stat) => (
                                                <div key={stat} className="statItem">
                                                    <label>{statDisplayNames[stat]}</label>
                                                    <div className="statInputs">
                                                        <p>Базовое значение</p>
                                                        <input
                                                            type="number"
                                                            value={char.stats[stat].base}
                                                            onChange={(e) => updateCharacterStat(index, stat, parseInt(e.target.value))}
                                                        />
                                                        <p>Бонус/Штраф</p>
                                                        <input
                                                            type="number"
                                                            value={char.stats[stat].bonus}
                                                            onChange={(e) => updateCharacterStatBonus(index, stat, parseInt(e.target.value))}
                                                        />
                                                    </div>
                                                </div>))}
                                        </div>

                                        {/* Параметры */}
                                    <h4>Параметры</h4>
                                        <div className="characterParameters">
                                            {Object.keys(char.parameters).map((param) => (
                                                <div key={param} className="paramItem">
                                                    <label>{paramDisplayNames[param]}</label>
                                                    <div className="paramInputs">
                                                        <p>Бонус/штраф</p>
                                                        <input
                                                            type="number"
                                                            value={char.parameters[param].bonus}
                                                            onChange={(e) => updateCharacterParamBonus(index, param, e.target.value)}
                                                            placeholder="Бонус/штраф"
                                                            className="bonusInput"
                                                        />
                                                        <p>Бонус от
                                                            снаряжения:{char.parameters[param].equipmentBonus} </p>
                                                        <p>Итог: {calculateParameterValue(char, param)}</p>
                                                    </div>
                                                </div>))}
                                        </div>

                                        <div className="characterAbilities">
                                            <h4>Способности</h4>
                                            <ul>
                                                {char.abilities.map((ability, idx) => (<li key={idx}>
                                                        <strong>{ability.name}</strong>: {ability.description} (Перезарядка: {ability.cooldown}s,
                                                        Стоимость: {ability.cost})
                                                    </li>))}
                                            </ul>

                                            {/* Форма для добавления способности */}
                                            <h5>Добавить способность</h5>
                                            <div>
                                                <input
                                                    type="text"
                                                    value={newAbility.name}
                                                    onChange={(e) => handleAbilityInputChange("name", e.target.value)}
                                                    placeholder="Название"
                                                />
                                                <input
                                                    type="text"
                                                    value={newAbility.description}
                                                    onChange={(e) => handleAbilityInputChange("description", e.target.value)}
                                                    placeholder="Описание"
                                                />
                                                <input
                                                    type="number"
                                                    value={newAbility.cooldown}
                                                    onChange={(e) => handleAbilityInputChange("cooldown", e.target.value)}
                                                    placeholder="Перезарядка"
                                                />
                                                <input
                                                    type="text"
                                                    value={newAbility.cost}
                                                    onChange={(e) => handleAbilityInputChange("cost", e.target.value)}
                                                    placeholder="Стоимость"
                                                />
                                                <button onClick={() => addAbilityToCharacter(index)}>Добавить
                                                    способность
                                                </button>
                                            </div>
                                        </div>

                                        {/* Добавление предметов */}
                                        <div className="addItemForm">
                                            <h4>Добавить предмет</h4>
                                            <select value={newItem.category}
                                                    onChange={(e) => handleInputChange("category", e.target.value)}>
                                                {itemCategories.map((category) => (
                                                    <option key={category} value={category}>{category}</option>))}
                                            </select>
                                            <input type="text" placeholder="Название предмета" value={newItem.name}
                                                   onChange={(e) => handleInputChange("name", e.target.value)}/>
                                            <input type="text" placeholder="Описание" value={newItem.description}
                                                   onChange={(e) => handleInputChange("description", e.target.value)}/>
                                            <input type="number" placeholder="Вес" min="0" value={newItem.weight}
                                                   onChange={(e) => handleInputChange("weight", e.target.value)}/>

                                            {newItem.category === "weapon" && (<>
                                                    <input type="number" placeholder="Физический урон"
                                                           value={newItem.physicalDamage}
                                                           onChange={(e) => handleInputChange("physicalDamage", e.target.value)}/>
                                                    <input type="number" placeholder="Магический урон"
                                                           value={newItem.magicDamage}
                                                           onChange={(e) => handleInputChange("magicDamage", e.target.value)}/>
                                                </>)}

                                            {newItem.category === "armor" && (<>
                                                    <input type="number" placeholder="Физическая броня"
                                                           value={newItem.physicalArmor}
                                                           onChange={(e) => handleInputChange("physicalArmor", e.target.value)}/>
                                                    <input type="number" placeholder="Магическая броня"
                                                           value={newItem.magicArmor}
                                                           onChange={(e) => handleInputChange("magicArmor", e.target.value)}/>
                                                </>)}

                                            <button onClick={() => addItemToInventory(index)}>Добавить</button>
                                        </div>

                                        <h4>Инвентарь</h4>
                                        {itemCategories.map((category) => (
                                            <div key={category} className="inventoryCategory">
                                                <h5>{category}</h5>
                                                {char.inventory[category].length > 0 ? (char.inventory[category].map((item, itemIndex) => (
                                                        <div key={itemIndex} className="inventoryItem">
                                                            <p>Название: {item.name}</p>
                                                            <p>Описание: {item.description || '-'}</p>
                                                            <p>Вес: {item.weight}</p>

                                                            {category === "weapon" ? (<>
                                                                    <p>Физический урон: {item.physicalDamage || '-'}</p>
                                                                    <p>Магический урон: {item.magicDamage || '-'}</p>
                                                                <button
                                                                    onClick={() => toggleEquipItem(index, category, itemIndex)}>
                                                                    {item.equipped ? "Снять" : "Экипировать"}
                                                                </button>
                                                                </>) : category === "armor" ? (<>
                                                                    <p>Физическая броня: {item.physicalArmor || '-'}</p>
                                                                    <p>Магическая броня: {item.magicArmor || '-'}</p>
                                                                <button
                                                                    onClick={() => toggleEquipItem(index, category, itemIndex)}>
                                                                    {item.equipped ? "Снять" : "Экипировать"}
                                                                </button>
                                                                </>) : (<>

                                                                </>)}


                                                        </div>))) : (<p>Нет предметов в категории</p>)}
                                            </div>))}
                                        <p>Текущий вес инвентаря: {calculateTotalWeight(char)} / Переносимый
                                            вес: {calculateParameterValue(char, 'carryWeight')}</p>
                                    </div>)}
                            </div>))) : (<p>Нет персонажей. Добавьте нового персонажа.</p>)}
                </div>
            </div>
        </div>);
};

export default Profile;
