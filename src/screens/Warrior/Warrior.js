import React, { useRef, useState } from "react";
import Text from "../../components/atoms/Text/Text";
import { useAppSelector } from "../../store";
import Form from "react-bootstrap/Form";
import style from "./Warrior.style";
import Button from "../../components/atoms/Button/Button";
import GamerCard from "../../components/molecules/GamerCard/GamerCard";

const Warrior = () => {
  const styles = style();
  const warriors = useAppSelector((state) => state.warrior.warriors);
  const [firstWarrior, setFirstWarrior] = useState({
    id: 0,
    name: "",
    hp: 1,
    skills: [],
  });
  const [secondWarrior, setSecondWarrior] = useState({
    id: 0,
    name: "",
    hp: 1,
    skills: [],
  });
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [isAttack, setIsAttack] = useState(Math.random() > 0.5);
  console.log("isAttack", isAttack);
  const [
    selectedSecondWarriorSubTypeOption,
    setSelectedSecondWarriorSubTypeOption,
  ] = useState({});
  const [
    selectedFirstWarriorSubTypeOption,
    setSelectedFirstWarriorSubTypeOption,
  ] = useState({});

  const [controlForSelect, setControlForSelect] = useState(0);

  return (
    <div style={styles.container}>
      {warriors.length > 0 ? (
        <div style={styles.optionContainer}>
          <Text text="Savaşçı Seç" width="10rem" />
          <Form.Select
            style={styles.options}
            defaultValue={0}
            onChange={(e) => {
              setFirstWarrior(warriors[e.target.value]);
            }}
          >
            <option
              value={0}
              disabled
              selected={controlForSelect === 0 && firstWarrior.id === 0}
            >
              Seçiniz
            </option>
            {warriors.map((warrior, index) => (
              <option
                key={warrior.id}
                value={index}
                disabled={
                  warrior.skills.map(
                    (skill) => skill.skill_type === 1 && skill.skill_type === 2
                  ).length === 0
                }
              >
                {warrior.name}
              </option>
            ))}
          </Form.Select>
          <Button
            text="Başla"
            fontSize="1.6rem"
            buttonColor="green"
            textColor="white"
            height="4.2rem"
            margin="0 0 0 2rem"
            padding="0 3rem"
            disabled={isGameStarted || firstWarrior.id === 0}
            onClick={() => {
              const newWarriors = warriors.filter(
                (warrior) =>
                  warrior.id !== firstWarrior.id &&
                  warrior.skills.map(
                    (skill) => skill.skill_type === 1 && skill.skill_type === 2
                  ).length > 0
              );
              const secondWarrior =
                newWarriors[Math.floor(Math.random() * newWarriors.length)];
              setSecondWarrior(secondWarrior);

              const secondWarriorSkill = secondWarrior?.skills?.filter(
                (skill) => {
                  if (isAttack) {
                    return skill.skill_type === 2;
                  }
                  return skill.skill_type === 1;
                }
              );

              setSelectedSecondWarriorSubTypeOption(
                secondWarriorSkill[
                  Math.floor(Math.random() * secondWarriorSkill.length)
                ]
              );

              setIsGameStarted(true);
            }}
          />
        </div>
      ) : (
        <Text
          text="Herhangi bir savaşçı bulunmamaktadır. Önce ayarlardan savaşçı ekleyiniz."
          fontSize="2.4rem"
        />
      )}
      {isGameStarted && (
        <div style={styles.gameSection}>
          <div style={styles.gamers}>
            <GamerCard
              type={isAttack ? 1 : 2}
              warrior={firstWarrior}
              isOwner
              setOption={(option) => {
                console.log("option", option);
                setSelectedFirstWarriorSubTypeOption(option);
              }}
            />
            <Text text="VS" fontSize="10rem" />
            <GamerCard type={isAttack ? 2 : 1} warrior={secondWarrior} />
          </div>
          <Button
            disabled={
              isGameFinished || firstWarrior.hp <= 0 || secondWarrior.hp <= 0
            }
            text={isAttack ? "Vur" : "Kaçın"}
            fontSize="1.6rem"
            buttonColor="#4267b2"
            padding="1rem"
            width="10rem"
            height="4.2rem"
            textColor="white"
            onClick={() => {
              if (isAttack) {
                if (
                  selectedFirstWarriorSubTypeOption.skill_type_option ===
                  selectedSecondWarriorSubTypeOption.skill_type_option
                ) {
                  if (
                    selectedFirstWarriorSubTypeOption.point >=
                    selectedSecondWarriorSubTypeOption.point
                  ) {
                    setSecondWarrior({
                      ...secondWarrior,
                      hp:
                        secondWarrior.hp -
                          selectedFirstWarriorSubTypeOption.point +
                          selectedSecondWarriorSubTypeOption.point <=
                        0
                          ? 0
                          : secondWarrior.hp -
                            selectedFirstWarriorSubTypeOption.point +
                            selectedSecondWarriorSubTypeOption.point,
                    });
                    setIsAttack(false);

                    const secondWarriorSkill = secondWarrior?.skills?.filter(
                      (skill) => {
                        return skill.skill_type === 1;
                      }
                    );
                    setSelectedSecondWarriorSubTypeOption(
                      secondWarriorSkill[
                        Math.floor(Math.random() * secondWarriorSkill.length)
                      ]
                    );
                  } else {
                    const secondWarriorSkill = secondWarrior?.skills?.filter(
                      (skill) => {
                        return skill.skill_type === 1;
                      }
                    );

                    setSelectedSecondWarriorSubTypeOption(
                      secondWarriorSkill[
                        Math.floor(Math.random() * secondWarriorSkill.length)
                      ]
                    );

                    setIsAttack(false);
                  }
                } else {
                  setSecondWarrior({
                    ...secondWarrior,
                    hp:
                      secondWarrior.hp -
                        selectedFirstWarriorSubTypeOption.point <=
                      0
                        ? 0
                        : secondWarrior.hp -
                          selectedFirstWarriorSubTypeOption.point,
                  });
                  setIsAttack(false);
                  const secondWarriorSkill = secondWarrior?.skills?.filter(
                    (skill) => {
                      return skill.skill_type === 1;
                    }
                  );

                  setSelectedSecondWarriorSubTypeOption(
                    secondWarriorSkill[
                      Math.floor(Math.random() * secondWarriorSkill.length)
                    ]
                  );
                }
              } else {
                if (
                  selectedFirstWarriorSubTypeOption.skill_type_option ===
                  selectedSecondWarriorSubTypeOption.skill_type_option
                ) {
                  if (
                    selectedFirstWarriorSubTypeOption.point <=
                    selectedSecondWarriorSubTypeOption.point
                  ) {
                    setFirstWarrior({
                      ...firstWarrior,
                      hp:
                        firstWarrior.hp -
                          selectedSecondWarriorSubTypeOption.point +
                          selectedFirstWarriorSubTypeOption.point <=
                        0
                          ? 0
                          : firstWarrior.hp -
                            selectedSecondWarriorSubTypeOption.point +
                            selectedFirstWarriorSubTypeOption.point,
                    });
                    setIsAttack(true);

                    const secondWarriorSkill = secondWarrior?.skills?.filter(
                      (skill) => {
                        return skill.skill_type === 2;
                      }
                    );

                    setSelectedSecondWarriorSubTypeOption(
                      secondWarriorSkill[
                        Math.floor(Math.random() * secondWarriorSkill.length)
                      ]
                    );
                  } else {
                    setIsAttack(true);
                    const secondWarriorSkill = secondWarrior?.skills?.filter(
                      (skill) => {
                        return skill.skill_type === 2;
                      }
                    );

                    setSelectedSecondWarriorSubTypeOption(
                      secondWarriorSkill[
                        Math.floor(Math.random() * secondWarriorSkill.length)
                      ]
                    );
                  }
                } else {
                  setFirstWarrior({
                    ...firstWarrior,
                    hp:
                      firstWarrior.hp -
                        selectedSecondWarriorSubTypeOption.point <=
                      0
                        ? 0
                        : firstWarrior.hp -
                          selectedSecondWarriorSubTypeOption.point,
                  });
                  setIsAttack(true);
                  const secondWarriorSkill = secondWarrior?.skills?.filter(
                    (skill) => {
                      return skill.skill_type === 2;
                    }
                  );

                  setSelectedSecondWarriorSubTypeOption(
                    secondWarriorSkill[
                      Math.floor(Math.random() * secondWarriorSkill.length)
                    ]
                  );
                }
              }
            }}
          />
        </div>
      )}
      {isGameFinished ||
        ((firstWarrior.hp <= 0 || secondWarrior.hp <= 0) && (
          <div style={styles.winnerContainer}>
            <Text text="Kazanan" fontSize="2.4rem" color="white" />
            <Text
              text={
                firstWarrior.hp > secondWarrior.hp
                  ? firstWarrior.name
                  : secondWarrior.name
              }
              fontSize="2.4rem"
              color="white"
            />
            <Button
              text="Tekrar Oyna"
              width="12rem"
              height="4.2rem"
              margin="2rem 0 0 0"
              padding="1rem"
              fontSize="1.6rem"
              buttonColor="white"
              textColor="green"
              onClick={() => {
                setIsGameStarted(false);
                setIsGameFinished(false);
                setIsAttack(Math.random() > 0.5);
                setSecondWarrior({ id: 0, name: "", hp: 1, skills: [] });
                setFirstWarrior({ id: 0, name: "", hp: 1, skills: [] });
                setControlForSelect(0);
              }}
            />
          </div>
        ))}
    </div>
  );
};

export default Warrior;
