import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/atoms/Button/Button";
import style from "./Navbar.style";

const Navbar = () => {
  const styles = style();
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div style={styles.container}>
      <div style={styles.buttons}>
        <Button
          buttonColor="transparent"
          textDecorationLine={location.pathname === "/" ? "underline" : ""}
          textUnderlineOffset="0.7rem"
          width="8rem"
          height="4.2rem"
          text="Savaş"
          margin="0 1rem 0 0"
          onClick={() => navigate("/")}
        />
        <Button
          buttonColor="transparent"
          width="8rem"
          height="4.2rem"
          text="Ayarlar"
          textDecorationLine={
            location.pathname === "/settings" ? "underline" : ""
          }
          textUnderlineOffset="0.7rem"
          onClick={() => navigate("/settings")}
        />
      </div>
    </div>
  );
};

export default Navbar;
