import {useNavigate} from "react-router-dom";
import RulesStyles from "./RulesStyles.module.scss";
import MStyles from "../../MainStyles.module.scss";
import "./Characteristics.css"
export function CharacteristicsRules() {
    const navigate= useNavigate();
    return (
                        <div id="CharacteristicsRules">

                            <div className={MStyles.homeMain}>
                                <div className={RulesStyles.mainContainer}>
                                    <button className={RulesStyles.BackButton} onClick={() => navigate(-1)}>&lt;</button>
                                    <div className={RulesStyles.textContainer}>
                            <h2>Характеристики персонажа</h2>

                            <p>Каждый персонаж уникален. Кто-то сильнее, кто-то быстрее, а кто-то живучее. Эти различия определяются характеристиками, каждая из которых дает бонусы в своем направлении.</p>

                            <h3>Сила</h3>
                            <ul>
                                <li><strong>Физический урон:</strong> +5 за каждую единицу силы.</li>
                                <li><strong>Переносимый вес:</strong> +5 единиц к начальным 2, плюс 0.5 за каждую единицу телосложения.</li>
                                <li><strong>Броски на действия:</strong> Каждые 2 очка силы дают +1 к броску на физические действия.</li>
                            </ul>

                            <h3>Ловкость</h3>
                            <ul>
                                <li><strong>Попадание и уворот:</strong> Влияет на точность и способность уклоняться от атак.</li>
                                <li><strong>Скорость:</strong> Определяет скорость передвижения персонажа.</li>
                                <li><strong>Финты:</strong> Позволяет выполнять различные маневры.</li>
                                <li><strong>Броски на действия:</strong> Каждые 2 очка ловкости дают +1 к броску на действия, связанные с ловкостью.</li>
                            </ul>

                            <h3>Телосложение</h3>
                            <ul>
                                <li><strong>Здоровье:</strong> +50 очков здоровья к начальным 50, плюс 50 за каждую единицу телосложения.</li>
                                <li><strong>Выносливость:</strong> 100 очков выносливости со старта, плюс 50 за каждую единицу телосложения.</li>
                                <li><strong>Стойкость:</strong> Увеличивает сопротивляемость ядам и другим негативным эффектам.</li>
                                <li><strong>Переносимый вес:</strong> +0.5 единицы за каждую единицу телосложения.</li>
                            </ul>

                            <h3>Интеллект</h3>
                            <ul>
                                <li><strong>Магический урон:</strong> +5 за очко интеллекта.</li>
                                <li><strong>Знания:</strong> Влияет на успешность использования знаний и заклинаний, например медицины или истории.</li>
                                <li><strong>Сила заклинаний:</strong> Усиливает эффект заклинаний.</li>
                            </ul>

                            <h3>Мудрость</h3>
                            <ul>
                                <li><strong>Знания о мире:</strong> Увеличивает понимание окружающего мира.</li>
                                <li><strong>Внимательность:</strong> Позволяет замечать детали и скрытые угрозы.</li>
                                <li><strong>Сила воли:</strong> Увеличивает сопротивляемость ментальным атакам.</li>
                                <li><strong>Мана:</strong> +10 очков маны за каждое очко мудрости. Со старта маны 0.</li>
                            </ul>

                            <h2>Параметры персонажа</h2>

                            <p>Параметры используются для определения способностей персонажа: выносливость, здоровье, мана и другие. Они влияют на то, может ли персонаж выдержать удар, использовать способности или нести груз.</p>

                            <h3>Здоровье</h3>
                            <p>Отображает количество урона, которое персонаж может получить. При нулевом или отрицательном значении персонаж теряет сознание и бросает на стабилизацию. Восстанавливается во время отдыха.</p>
                            <ul>
                                <li><strong>Стабилизация:</strong> Бросаются кубы до трех успехов или провалов.</li>
                                <li><strong>Смерть:</strong> При отрицательном значении, равном максимальному здоровью, персонаж умирает.</li>
                                <li><strong>Восстановление:</strong> 10% за час отдыха.</li>
                            </ul>

                            <h3>Мана</h3>
                            <p>Используется для заклинаний и способностей. Восстанавливается во время отдыха.</p>
                            <ul>
                                <li><strong>Восстановление:</strong> 25% за час отдыха.</li>
                            </ul>

                            <h3>Выносливость</h3>
                            <p>Тратится на активные действия. При нулевом значении персонаж получает дебафф "изнеможение".</p>
                            <ul>
                                <li><strong>изнеможение:</strong> -5 ко всем действиям.</li>
                                <li><strong>Восстановление:</strong> 25% при активных действиях, 50% при отдыхе.</li>
                            </ul>

                            <h3>Энергия</h3>
                            <p>Для роботов и големов. Зависит от реактора и снаряжения.</p>

                            <h3>Броня</h3>
                            <p>Блокирует урон.</p>
                            <ul>
                                <li><strong>Физическая броня:</strong> Регенерируется ковкой.</li>
                                <li><strong>Магическая броня:</strong> Восстанавливается после боя.</li>
                            </ul>

                            <h3>Переносимый вес</h3>
                            <p>Определяет максимальный вес, который может нести персонаж.</p>
                            <ul>
                                <li><strong>Перегруз:</strong> Снижает скорость вдвое и дает помеху на физ действия.</li>
                            </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
    );
}