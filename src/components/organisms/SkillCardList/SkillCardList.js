import React from "react";
import SkillCard from "../../molecules/SkillCard/SkillCard";

const SkillCardList = ({ skills, onRemoveSkill, onSaveSkill }) => {
  return (
    <div>
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
  );
};

export default SkillCardList;
