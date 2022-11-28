const style = ({
  fontSize,
  padding,
  margin,
  border,
  width,
  textColor,
  backgroundColor,
  height,
}) => ({
  container: {
    display: "flex",
    alignItems: "center",
    margin,
  },
  input: {
    fontSize,
    width: width || "100%",
    height,
    padding,
    border: border || "none",
    borderBottom: "1px solid #ccc",
    color: textColor,
    backgroundColor,
  },
});

export default style;
