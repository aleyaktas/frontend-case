import React, { useState } from "react";
import style from "./WarriorCard.style";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import SkillCardList from "../../organisms/SkillCardList/SkillCardList";

const WarriorCard = ({
  name,
  healthyPoints,
  onRemoveWarrior,
  skills,
  onSaveSkill,
  onRemoveSkill,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const styles = style();
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <Text text={name} />
        <ProgressBar
          label={healthyPoints}
          variant="success"
          now={healthyPoints}
          style={styles.progressBar}
        />
        {isOpen && (
          <Button
            width="10rem"
            height="4.2rem"
            text="Savaşçıyı Sil"
            buttonColor="red"
            onClick={onRemoveWarrior}
          />
        )}
        <Button
          iconName={isOpen ? "UpArrow" : "DownArrow"}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && (
        <SkillCardList
          skills={skills}
          onRemoveSkill={(skill_id) => onRemoveSkill(skill_id)}
          onSaveSkill={(skill) => onSaveSkill(skill)}
        />
      )}
    </div>
  );
};

export default WarriorCard;
