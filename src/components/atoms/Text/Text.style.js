const style = ({
  fontSize,
  fontWeight,
  color,
  textDecorationLine,
  textUnderlineOffset,
  textAlign,
  letterSpacing,
  margin,
  padding,
  lineHeight,
  opacity,
  width,
}) => ({
  text: {
    fontSize: fontSize || "1.6rem",
    color,
    textDecorationLine,
    textUnderlineOffset,
    textAlign,
    letterSpacing,
    margin: margin || "0px",
    padding,
    fontWeight,
    lineHeight,
    opacity,
    width,
  },
});

export default style;
