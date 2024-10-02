import './rules.css';
import { useNavigate } from "react-router-dom";

export function Rules() {

const navigate= useNavigate();
    return (
        <div className="rulesContainers" id='rulesPage'>
            <div className="containersRow">
                <div className="RuleContainer" id='fight' onClick={()=>navigate('FightRules')}>
                    <span>Боевка</span>
                </div>
                <div className="RuleContainer" id='characteristics' onClick={()=>navigate('CharacteristicsRules')}>
                    <span>Характеристики</span>
                </div>
                <div className="RuleContainer" id='skills' onClick={()=>navigate('SkillsRules')}>
                    <span>Навыки</span>
                </div>
                <div className="RuleContainer" id='abilities' onClick={()=>navigate('AbilitiesRules')}>
                    <span>Способности</span>
                </div>
                <div className="RuleContainer" id='stealth' onClick={()=>navigate('StealthRules')}>
                    <span>скрытность</span>
                </div>
                <div className="RuleContainer" id='magic' onClick={()=>navigate('MagicRules')}>
                    <span>магия</span>
                </div>
                <div className="RuleContainer" id='shamanism' onClick={()=>navigate('ShamanismRules')}>
                    <span>духи и шаманизм</span>
                </div>
            </div>
        </div>
    );
}
