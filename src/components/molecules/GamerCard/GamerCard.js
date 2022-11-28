import React from "react";
import { Form, ProgressBar } from "react-bootstrap";
import Text from "../../atoms/Text/Text";
import style from "./GamerCard.style";

const GamerCard = ({ warrior, type, isOwner, setOption }) => {
  const styles = style();
  return (
    <div style={styles.container}>
      <Text text={warrior?.name} fontSize="1.6rem" margin="2rem 0 1rem 0" />
      <ProgressBar
        label={warrior?.hp}
        variant="success"
        now={warrior?.hp}
        style={styles.progressBar}
      />
      <Text
        text={type === 1 ? "Atak" : "Defans"}
        fontSize="1.6rem"
        margin="0 0 1rem 0"
      />
      {warrior?.skills?.length > 0 && isOwner && (
        <Form.Select
          style={styles.options}
          defaultValue={0}
          onChange={(e) => setOption(warrior.skills[parseInt(e.target.value)])}
        >
          <option value={0}>Yetenek Seç</option>
          {warrior?.skills?.map(
            (skill, index) =>
              skill.skill_type === type && (
                <option key={skill.id} value={index}>
                  {skill.skill_type_option === 1
                    ? "Yakın Mesafe"
                    : "Uzak Mesafe"}
                </option>
              )
          )}
        </Form.Select>
      )}
    </div>
  );
};

export default GamerCard;
