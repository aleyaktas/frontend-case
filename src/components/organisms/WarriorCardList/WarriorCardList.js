import React from "react";
import WarriorCard from "../../molecules/WarriorCard/WarriorCard";
import style from "./WarriorCardList.style";

const WarriorCardList = ({ warriors }) => {
  const styles = style();
  return (
    <div style={styles.container}>
      {warriors.map((warrior) => (
        <div key={warrior.id}>
          <WarriorCard
            name={warrior.name}
            healthyPoints={warrior.hp}
            skills={warrior.skills}
            onRemoveSkill={() => null}
            onSaveSkill={() => null}
            onRemoveWarrior={() => null}
          />
        </div>
      ))}
    </div>
  );
};

export default WarriorCardList;
