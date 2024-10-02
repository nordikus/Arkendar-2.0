import {useNavigate} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import Phaser from 'phaser';
import './stealth.css'
import MStyles from "../../MainStyles.module.scss"
import ButtonThief from "./thief.png"
import RulesStyles from "./RulesStyles.module.scss";
export function StealthRules() {
    const [isGameStarted, setIsGameStarted] = useState(false);
    const navigate = useNavigate();
    const gameContainerRef = useRef(null);
    useEffect(() => {
        if (isGameStarted) {
            const config = {
                type: Phaser.AUTO,
                parent: gameContainerRef.current,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                transparent: true,
                scene: {
                    create: create,
                    update: update
                }
            };
            const game = new Phaser.Game(config);

            function create() {
                // Create the enemy as a circle
                this.enemy = this.add.circle(400, 300, 20, 0xff0000);

                // Enemy properties
                this.enemy.speed = 100; // Adjust speed as needed
                this.enemy.direction = Phaser.Math.Between(0, 359); // Random initial direction

                // Game boundaries
                this.gameWidth = this.cameras.main.width;
                this.gameHeight = this.cameras.main.height;

                // Follow cursor movement for player position
                this.input.on('pointermove', (pointer) => {
                    this.playerX = pointer.x;
                    this.playerY = pointer.y;
                });

                // Text for message about detection
                this.message = this.add.text(400, 300, '', {fontSize: '50px', fill: '#ffffff'}).setVisible(false);
            }

            function update(time, delta) {

                // Calculate new enemy position based on speed and direction
                const radians = Phaser.Math.DegToRad(this.enemy.direction);
                this.enemy.x += Math.cos(radians) * this.enemy.speed * (delta / 1000);
                this.enemy.y += Math.sin(radians) * this.enemy.speed * (delta / 1000);

                // Check for wall collisions (basic implementation)
                if (this.enemy.x < this.enemy.radius || this.enemy.x > this.gameWidth - this.enemy.radius) {
                    this.enemy.direction = 180 - this.enemy.direction;
                }
                if (this.enemy.y < this.enemy.radius || this.enemy.y > this.gameHeight - this.enemy.radius) {
                    this.enemy.direction = -this.enemy.direction;
                }

                // Check for player collision
                const distance = Phaser.Math.Distance.Between(this.enemy.x, this.enemy.y, this.playerX, this.playerY);
                if (distance < 100) {
                    this.message.setText('Вас поймали!');
                    this.message.setVisible(true);
                    this.enemy.speed = 0;
                    this.time.addEvent({
                        delay: 1000, // Задержка в миллисекундах (5 секунд)
                        callback: () => {
                            setIsGameStarted(false);
                            game.destroy(true);
                        },
                        callbackScope: this,
                        loop: false // Таймер сработает только один раз
                    });

                }
            }

        }
    }, [isGameStarted]);

    return (
        <div id="StealthRulesPage">

            <div ref={gameContainerRef} style={{position: 'absolute', width: '100%', height: '100%', display: isGameStarted ? 'block': 'none' , zIndex: isGameStarted ? 3 : 0}}/>
            <div className={MStyles.homeMain}>
            <div className={RulesStyles.mainContainer}>
                <button className={RulesStyles.BackButton} onClick={() => navigate(-1)}>&lt;</button>
                <div className={RulesStyles.textContainer}>
                    <h2>Скрытность <button className={'startGameButton'} onClick={() => setIsGameStarted(true)}><img src={ButtonThief}></img></button></h2>

                    <p><strong>Скрытность</strong> – это навык, позволяющий персонажу избегать обнаружения,
                        прокрадываться
                        мимо врагов и совершать тайные действия. Для успешного скрытия необходимо сделать бросок d20 и
                        сложить полученное значение с модификатором ловкости, навыком скрытности и другими бонусами
                        (баффами) или штрафами (дебаффами).</p>

                    <h3>Обнаружение</h3>
                    <p>Чтобы обнаружить скрывающегося персонажа, другой игрок должен сделать бросок мудрости. В бою на
                        поиск
                        тратится дополнительное действие.</p>

                    <h3>Атаки из скрытности</h3>
                    <p>Атаки из скрытности всегда считаются критическими, но без двойного урона и эффекта нокдауна. Для
                        того, чтобы определить дополнительные эффекты атаки, нужно совершить обычный бросок кубика
                        урона.
                        Чтобы попасть по цели из скрытности, необходимо выбросить значение броска больше 10.</p>

                    <h3>Влияние окружения</h3>
                    <p>Окружающая среда значительно влияет на сложность скрыться или обнаружить персонажа. Ниже
                        приведены
                        примеры бонусов и штрафов к броску скрытности:</p>

                    <table>
                        <thead>
                        <tr>
                            <th>Окружение</th>
                            <th>Бонус/Штраф</th>
                            <th>Примечания</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Толпа</td>
                            <td>+4</td>
                            <td>Легко потеряться в толпе.</td>
                        </tr>
                        <tr>
                            <td>Чистое поле</td>
                            <td>-5</td>
                            <td>Отсутствие укрытий затрудняет скрытность.</td>
                        </tr>
                        <tr>
                            <td>Темнота</td>
                            <td>+2</td>
                            <td>В темноте сложнее заметить.</td>
                        </tr>
                        <tr>
                            <td>Свет</td>
                            <td>-2</td>
                            <td>На свету все отчетливо видно.</td>
                        </tr>
                        <tr>
                            <td>Полумрак</td>
                            <td>+0</td>
                            <td>Обычные условия освещения.</td>
                        </tr>
                        <tr>
                            <td>Лес</td>
                            <td>+2</td>
                            <td>Лес обеспечивает множество укрытий. *Не действует против существ, хорошо ориентирующихся
                                в
                                лесу (например, животных).*
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </div>
            );
            }