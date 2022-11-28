import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "../../atoms/Button/Button";
import TextInput from "../../atoms/TextInput/TextInput";
import style from "./SkillCard.style";

const SkillCard = ({ skills, skill, onRemoveSkill, onSaveSkill }) => {
  const [newSkill, setNewSkill] = useState({
    skill_type: skill?.skill_type || 0,
    skill_type_option: skill?.skill_type_option || 0,
    point: skill?.point || null,
  });

  const styles = style();

  return (
    <div style={styles.container}>
      <Form.Select
        onChange={(e) =>
          setNewSkill({ ...newSkill, skill_type: parseInt(e.target.value) })
        }
        defaultValue={newSkill.skill_type}
        style={styles.option}
      >
        <option value={0} disabled>
          Tür
        </option>
        <option
          name="skill_type"
          value={1}
          disabled={
            skill
              ? true
              : skills?.filter((skill) => skill.skill_type === 1).length === 2
          }
        >
          Atak
        </option>
        <option
          name="skill_type"
          value={2}
          disabled={
            skill
              ? true
              : skills?.filter((skill) => skill.skill_type === 2).length === 2
          }
        >
          Defans
        </option>
      </Form.Select>
      <Form.Select
        onChange={(e) =>
          setNewSkill({
            ...newSkill,
            skill_type_option: parseInt(e.target.value),
          })
        }
        defaultValue={newSkill.skill_type_option}
        style={styles.option}
      >
        <option value={0} disabled>
          Alt Tür
        </option>
        <option
          name="skill_type_option"
          value={1}
          disabled={
            skill
              ? true
              : skills?.filter((skill) => skill.skill_type_option === 1)
                  .length === 2
          }
        >
          Yakın Mesafe
        </option>
        <option
          name="skill_type_option"
          value={2}
          disabled={
            skill
              ? true
              : skills?.filter((skill) => skill.skill_type_option === 2)
                  .length === 2
          }
        >
          Uzak Mesafe
        </option>
      </Form.Select>
      <TextInput
        disabled={skill}
        fontSize="1.6rem"
        height="5.2rem"
        padding="1rem"
        margin="0 1rem 0 0"
        value={newSkill.point}
        type="number"
        placeHolder="4-20"
        onChange={(e) =>
          setNewSkill({
            ...newSkill,
            point: parseInt(e.target.value),
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
          textColor="white"
          onClick={() => {
            onSaveSkill(newSkill);
            setNewSkill({
              skill_type: 0,
              skill_type_option: 0,
              point: null,
            });
          }}
        />
        <Button
          text="Sil"
          width="10rem"
          height="4.2rem"
          buttonColor="red"
          disabled={!skill?.id}
          textColor="white"
          onClick={() => onRemoveSkill(skill?.id)}
        />
      </div>
    </div>
  );
};

export default SkillCard;
