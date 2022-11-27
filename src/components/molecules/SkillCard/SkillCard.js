import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "../../atoms/Button/Button";
import TextInput from "../../atoms/TextInput/TextInput";
import style from "./SkillCard.style";

const SkillCard = ({ skill, onRemoveSkill, onSaveSkill }) => {
  const [newSkill, setNewSkill] = useState({
    skill_type: skill?.skill_type || 0,
    skill_type_option: skill?.skill_type_option || 0,
    point: skill?.point || null,
  });

  const styles = style();

  return (
    <div style={styles.container}>
      <Form.Select defaultValue={newSkill.skill_type} style={styles.option}>
        <option>Tür</option>
        <option
          value={1}
          onChange={() =>
            setNewSkill({
              ...skill,
              skill_type: 1,
            })
          }
        >
          Atak
        </option>
        <option
          value={2}
          onChange={() =>
            setNewSkill({
              ...skill,
              skill_type: 2,
            })
          }
        >
          Defans
        </option>
      </Form.Select>
      <Form.Select
        defaultValue={newSkill.skill_type_option}
        style={styles.option}
      >
        <option>Alt Tür</option>
        <option
          value={1}
          onChange={() =>
            setNewSkill({
              ...skill,
              skill_type_option: 1,
            })
          }
        >
          Yakın Mesafe
        </option>
        <option
          value={2}
          onChange={() =>
            setNewSkill({
              ...skill,
              skill_type_option: 2,
            })
          }
        >
          Uzak Mesafe
        </option>
      </Form.Select>
      <TextInput
        fontSize="1.6rem"
        height="5.2rem"
        padding="1rem"
        margin="0 1rem 0 0"
        value={newSkill.point}
        type="number"
        placeHolder="4-20"
        onChange={(e) =>
          setNewSkill({
            ...skill,
            point: e.target.value,
          })
        }
      />
      <div style={styles.buttons}>
        <Button
          text="Kaydet"
          width="10rem"
          height="4.2rem"
          margin="0 1rem 0 0"
          buttonColor="green"
          disabled={skill?.id}
          textColor="black"
          onClick={() => onSaveSkill(newSkill)}
        />
        <Button
          text="Sil"
          width="10rem"
          height="4.2rem"
          buttonColor="red"
          disabled={!skill?.id}
          textColor="black"
          onClick={() => onRemoveSkill(skill?.id)}
        />
      </div>
    </div>
  );
};

export default SkillCard;
