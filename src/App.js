import "./App.css";
import WarriorCard from "./components/molecules/WarriorCard/WarriorCard";

const App = () => {
  const skills = [
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
  ];
  return (
    <div className="App">
      <WarriorCard
        name="Savaşçı 1"
        healthyPoints={70}
        skills={skills}
        onRemoveSkill={() => null}
        onSaveSkill={() => null}
        onRemoveWarrior={() => null}
      />
    </div>
  );
};
export default App;
