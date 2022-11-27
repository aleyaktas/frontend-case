import {
  addSkill,
  getWarriors,
  removeSkill,
  removeWarrior,
} from "../../store/features/warrior/warriorSlice";

export const getInitialData = (dispatch) => {
  dispatch(getWarriors());
};

export const onSaveSkill = async (dispatch, warrior_id, skill) => {
  skill.warrior_id = warrior_id;
  await dispatch(addSkill(skill));
  await dispatch(getWarriors());
};

export const onRemoveSkill = async (dispatch, skill_id) => {
  await dispatch(removeSkill(skill_id));
  await dispatch(getWarriors());
};

export const onRemoveWarrior = async (dispatch, warrior_id) => {
  await dispatch(removeWarrior(warrior_id));
  await dispatch(getWarriors());
};

export default {};
