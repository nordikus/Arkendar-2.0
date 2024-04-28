import './rules.css';
import {FightRules} from "./rulescontainers/FightRules";
import {CharacteristicsRules} from "./rulescontainers/CharacteristicsRules";
import {SkillsRules} from "./rulescontainers/SkillsRules";
import {AbilitiesRules} from "./rulescontainers/AbilitiesRules";
export function Rules() {


    return (
        <div className="rulesContainers" id='rulesPage'>
            <div className="containersRow">
                <FightRules/>
                <CharacteristicsRules/>
                <SkillsRules/>
                <AbilitiesRules/>
            </div>
        </div>
    );
}
