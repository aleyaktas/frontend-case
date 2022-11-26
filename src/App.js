import "./App.css";
import SkillCard from "./components/molecules/SkillCard/SkillCard";
import SkillCardList from "./components/organisms/SkillCardList/SkillCardList";

const App = () => {
  return (
    <div className="App">
      <SkillCardList
        skills={[
          {
            id: 1,
            skill_type: 1,
            skill_type_option: 1,
            point: 10,
          },
          {
            id: 2,
            skill_type: 2,
            skill_type_option: 2,
            point: 20,
          },
        ]}
        onRemoveSkill={() => null}
        onSaveSkill={() => null}
      />
    </div>
  );
};
export default App;
