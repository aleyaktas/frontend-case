const style = () => ({
  container: {
    width: "100%",
    height: "94vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
  },
  optionContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "4.2rem",
    fontSize: "1.6rem",
    padding: "1rem",
  },
  options: {
    height: "4.2rem",
    fontSize: "1.6rem",
    padding: "1rem",
    width: "20rem",
  },
  gameSection: {
    width: "100%",
    marginTop: "10rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  gamers: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
  },
  winnerContainer: {
    padding: "2rem",
    width: "30rem",
    marginTop: "10rem",
    border: "2px solid #e0e0e0",
    backgroundColor: "green",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default style;
