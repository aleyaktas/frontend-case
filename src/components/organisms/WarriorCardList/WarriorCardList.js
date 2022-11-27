import React from "react";
import WarriorCard from "../../molecules/WarriorCard/WarriorCard";
import style from "./WarriorCardList.style";

const WarriorCardList = ({
  warriors,
  onSaveSkill,
  onRemoveSkill,
  onRemoveWarrior,
}) => {
  const styles = style();
  return (
    <div style={styles.container}>
      {warriors.map((warrior) => (
        <div key={warrior.id}>
          <WarriorCard
            name={warrior.name}
            healthyPoints={warrior.hp}
            skills={warrior.skills}
            onRemoveSkill={(skill_id) => onRemoveSkill(skill_id)}
            onSaveSkill={(skill) => onSaveSkill(warrior.id, skill)}
            onRemoveWarrior={() => onRemoveWarrior(warrior.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default WarriorCardList;
