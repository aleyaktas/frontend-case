import React, { useState } from "react";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import SkillCard from "../../molecules/SkillCard/SkillCard";
import style from "./SkillCardList.style";

const SkillCardList = ({ skills, onRemoveSkill, onSaveSkill }) => {
  const styles = style();
  const [isAdd, setIsAdd] = useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <Text width="20rem" text="Tür" />
        <Text width="20rem" text="Alt Tür" />
        <Text width="20rem" text="Hasar Puanı" />
        <Button
          disabled={skills?.length === 4}
          width="20rem"
          iconName="Plus"
          buttonColor="blue"
          onClick={() => setIsAdd(true)}
        />
      </div>
      {skills?.length === 0 && !isAdd && (
        <div className="alert alert-info m-2 p-3" role="alert">
          <Text
            text="🦄 Savaşçıya ait yetenek kartı bulunmamaktadır. Yeni bir yetenek kartı eklemek için ' + ' butonuna tıklayınız."
            color="#0c5460"
            fontSize="1.4rem"
          />
        </div>
      )}
      <div style={styles.skills}>
        {skills.map((skill) => (
          <div key={skill.id}>
            <SkillCard
              skill={skill}
              onRemoveSkill={() => onRemoveSkill(skill.id)}
            />
          </div>
        ))}
        {isAdd && (
          <SkillCard
            skills={skills}
            onSaveSkill={(skill) => {
              onSaveSkill(skill);
              setIsAdd(false);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default SkillCardList;
