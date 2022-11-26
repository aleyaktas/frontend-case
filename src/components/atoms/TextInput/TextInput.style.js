const style = ({
  fontSize,
  padding,
  margin,
  border,
  width,
  textColor,
  backgroundColor,
}) => ({
  container: {
    display: "flex",
    alignItems: "center",
    padding,
    margin,
    width: "-webkit-fill-available",
  },
  input: {
    fontSize,
    width: width || "100%",
    border: border || "none",
    borderBottom: "1px solid #ccc",
    color: textColor,
    backgroundColor,
  },
});

export default style;
