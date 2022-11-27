import React from "react";
import Button from "../../components/atoms/Button/Button";
import style from "./Navbar.style";

const Navbar = () => {
  const styles = style();
  return (
    <div style={styles.container}>
      <div style={styles.buttons}>
        <Button
          buttonColor="transparent"
          textDecorationLine="underline"
          textUnderlineOffset="0.7rem"
          width="8rem"
          height="4.2rem"
          text="Savaş"
          margin="0 1rem 0 0"
        />
        <Button
          buttonColor="transparent"
          width="8rem"
          height="4.2rem"
          text="Ayarlar"
        />
      </div>
    </div>
  );
};

export default Navbar;
