import React from "react";
import Icon from "../Icon/Icon";
import PropTypes from "prop-types";
import style from "./Button.styles";
import Text from "../Text/Text";

const Button = ({
  width,
  height,
  padding,
  margin,
  buttonColor,
  border,
  borderColor,
  borderRadius,
  fontSize,
  fontWeight,
  font,
  text,
  textPosition,
  textColor,
  letterSpacing,
  iconPosition,
  iconName,
  iconColor,
  iconSize,
  onClick,
  onChange,
  className,
  textMargin,
  textDecorationLine,
  textUnderlineOffset,
  disabled,
  type,
}) => {
  const styles = style({
    width,
    height,
    padding,
    margin,
    border,
    borderColor,
    borderRadius,
    iconPosition,
    iconSize,
    buttonColor,
    textPosition,
    textDecorationLine,
    disabled,
  });

  return (
    <button
      type={type}
      disabled={disabled}
      style={styles.button}
      className={className}
      onClick={onClick}
      onChange={onChange}
    >
      <Text
        text={text}
        margin={textMargin}
        font={font}
        fontWeight={fontWeight}
        fontSize={fontSize}
        color={textColor}
        letterSpacing={letterSpacing}
        textDecorationLine={textDecorationLine}
        textUnderlineOffset={textUnderlineOffset}
      />
      {iconName && (
        <Icon
          style={styles.icon}
          name={iconName}
          width={iconSize}
          height={iconSize}
          color={iconColor}
        />
      )}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  buttonColor: PropTypes.string,
  iconColor: PropTypes.string,
  borderColor: PropTypes.string,
  iconPosition: PropTypes.oneOf(["start", "end", "left", "right"]),
};

Button.defaultProps = {
  disabled: false,
  buttonColor: null,
  border: "1px solid black",
  textColor: "black",
};

export default Button;
