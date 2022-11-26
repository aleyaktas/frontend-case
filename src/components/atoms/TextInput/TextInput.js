import * as React from "react";
import Icon from "../Icon/Icon";
import PropTypes from "prop-types";
import style from "./TextInput.style";

const TextInput = ({
  fontSize,
  backgroundColor,
  width,
  height,
  padding,
  margin,
  border,
  textColor,
  placeHolder,
  iconName,
  iconWidth,
  iconHeight,
  iconColor,
  font,
  type,
  className,
  onChange,
  onKeyDown,
  value,
}) => {
  const styles = style({
    fontSize,
    padding,
    margin,
    border,
    width,
    height,
    textColor,
    backgroundColor,
  });

  return (
    <div style={styles.container}>
      {iconName && (
        <Icon
          name={iconName}
          width={iconWidth}
          height={iconHeight}
          color={iconColor}
        />
      )}
      <input
        value={value}
        name={placeHolder.toLowerCase()}
        type={type}
        className={`${font} ${className}`}
        style={styles.input}
        placeholder={placeHolder}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

TextInput.propTypes = {
  placeHolder: PropTypes.string,
  iconWidth: PropTypes.number,
  iconHeight: PropTypes.number,
};
TextInput.defaultProps = {
  placeHolder: "placeHolder",
};

export default TextInput;
