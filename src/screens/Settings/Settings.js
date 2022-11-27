import React, { useEffect, useState } from "react";
import Button from "../../components/atoms/Button/Button";
import Modal from "react-bootstrap/Modal";
import style from "./Settings.style";
import TextInput from "../../components/atoms/TextInput/TextInput";
import Text from "../../components/atoms/Text/Text";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  addWarrior,
  getWarriors,
} from "../../store/features/warrior/warriorSlice";
import WarriorCardList from "../../components/organisms/WarriorCardList/WarriorCardList";
import {
  getInitialData,
  onRemoveSkill,
  onRemoveWarrior,
  onSaveSkill,
} from "./actions";

const Settings = () => {
  const styles = style();
  const [openModal, setOpenModal] = useState(false);
  const [warrior, setWarrior] = useState({ name: "", hp: 0 });
  const handleModal = () => setOpenModal(!openModal);
  const dispatch = useAppDispatch();
  const warriors = useAppSelector((state) => state.warrior.warriors);

  useEffect(() => {
    getInitialData(dispatch);
  }, [dispatch]);

  return (
    <div style={styles.container}>
      <Button
        text="Savaşçı Ekle"
        buttonColor="#4267B2"
        textColor="white"
        height="4.2rem"
        padding="1rem"
        margin="0 0 3rem 0"
        onClick={handleModal}
      />
      <Modal show={openModal} onHide={handleModal} size="md" centered>
        <Modal.Header style={{ fontSize: "1.6rem" }} closeButton>
          <Modal.Title style={{ fontSize: "1.8rem" }}>
            Add New Warrior
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={styles.inputContainer}>
            <Text text="Savaşçı Adı:" margin="0 0.1rem 0 0" width="9rem" />
            <TextInput
              width="12rem"
              placeHolder="Enter name"
              fontSize="1.6rem"
              padding="0.5rem"
              onChange={(e) => setWarrior({ ...warrior, name: e.target.value })}
            />
          </div>
          <div style={styles.inputContainer}>
            <Text text="Can Puanı:" margin="0 0.1rem 0 0" width="9rem" />
            <TextInput
              width="12rem"
              placeHolder="80 - 100"
              fontSize="1.6rem"
              min={80}
              max={100}
              type="number"
              padding="0.5rem"
              onChange={(e) =>
                setWarrior({ ...warrior, hp: parseInt(e.target.value) })
              }
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            text="Kaydet"
            width="12rem"
            height="4.2rem"
            buttonColor="green"
            textColor="white"
            onClick={async () => {
              await dispatch(addWarrior(warrior));
              await dispatch(getWarriors());
              handleModal();
            }}
          />
        </Modal.Footer>
      </Modal>
      <WarriorCardList
        warriors={warriors}
        onSaveSkill={(warrior_id, skill) =>
          onSaveSkill(dispatch, warrior_id, skill)
        }
        onRemoveSkill={(skill_id) => onRemoveSkill(dispatch, skill_id)}
        onRemoveWarrior={(warrior_id) => onRemoveWarrior(dispatch, warrior_id)}
      />
    </div>
  );
};

export default Settings;
