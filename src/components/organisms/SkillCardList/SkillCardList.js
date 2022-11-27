import React from "react";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import SkillCard from "../../molecules/SkillCard/SkillCard";
import style from "./SkillCardList.style";

const SkillCardList = ({ skills, onRemoveSkill, onSaveSkill }) => {
  const styles = style();
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <Text width="20rem" text="Tür" />
        <Text width="20rem" text="Alt Tür" />
        <Text width="20rem" text="Hasar Puanı" />
        <Button width="20rem" iconName="Plus" buttonColor="blue" />
      </div>
      <div style={styles.skills}>
        {skills.map((skill) => (
          <div key={skill.id}>
            <SkillCard
              skill={skill}
              onRemoveSkill={onRemoveSkill}
              onSaveSkill={onSaveSkill}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCardList;
