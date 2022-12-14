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
        <Text width="20rem" text="T羹r" />
        <Text width="20rem" text="Alt T羹r" />
        <Text width="20rem" text="Hasar Puan覺" />
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
            text="???? Sava??癟覺ya ait yetenek kart覺 bulunmamaktad覺r. Yeni bir yetenek kart覺 eklemek i癟in ' + ' butonuna t覺klay覺n覺z."
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
