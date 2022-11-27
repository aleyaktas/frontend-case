import "./App.css";
import WarriorCard from "./components/molecules/WarriorCard/WarriorCard";
import WarriorCardList from "./components/organisms/WarriorCardList/WarriorCardList";
import Navbar from "./layouts/Navbar/Navbar";

const App = () => {
  const warriors = [
    {
      id: 1,
      name: "Savaşçı 1",
      hp: 100,
      skills: [
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
      ],
    },
    {
      id: 2,
      name: "Savaşçı 2",
      hp: 100,
      skills: [
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
      ],
    },
  ];
  return (
    <div className="App">
      <Navbar />
      {/* <WarriorCard
        name="Savaşçı 1"
        healthyPoints={70}
        skills={skills}
        onRemoveSkill={() => null}
        onSaveSkill={() => null}
        onRemoveWarrior={() => null}
      /> */}
      <WarriorCardList warriors={warriors} />
    </div>
  );
};
export default App;
