import React from "react";
import PropTypes from "prop-types";
import style from "./Text.style";

const Text = ({
  className,
  text,
  opacity,
  font,
  fontSize,
  fontWeight,
  color,
  textDecorationLine,
  textUnderlineOffset,
  textAlign,
  letterSpacing,
  lineHeight,
  padding,
  margin,
  width,
}) => {
  const styles = style({
    fontSize,
    fontWeight,
    opacity,
    color,
    textDecorationLine,
    textUnderlineOffset,
    textAlign,
    letterSpacing,
    lineHeight,
    margin,
    padding,
    width,
  });

  return (
    <p style={styles.text} className={`${font} ${className}`}>
      {text}
    </p>
  );
};

Text.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  textDecorationLine: PropTypes.string,
};
Text.defaultProps = {
  color: "black",
};

export default Text;
