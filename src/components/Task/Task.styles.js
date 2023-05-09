import { createUseStyles } from "react-jss";

export const useTaskStyles = createUseStyles({
  parent: {
    width: "100%",
    height: "100%",
    background: "#333333",
    color: "white",
  },
  top: { textAlign: "right", padding: "10px" },
  main: {
    background: "#333333",
  },
  task: {
    maxWidth: "70%",
    backgroundImage: "linear-gradient(#02aab0, #00cdac)",
    marginTop: 40,
    margin: "auto",
    borderRadius: "40px",
  },

  taskTop: {
    display: "flex",
    padding: "20px 0",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  first: {},
  middle: {
    textAlign: "center",
    width: 350,
  },
  description: {
    width: 400,
  },
  taskDescription: {
    border: "3px solid #76675FFF",
    borderRadius: 10,
    textAlign: "center",
  },
  buttons: {
    textAlign: "center",
    marginTop: 20,
  },
  taskName: {
    background: "#333333",
    borderRadius: 10,
    textAlign: "center",
    padding: 2,
  },
  typeTask: {
    border: "1px solid white",
    marginTop: 10,
    borderRadius: 10,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    padding: 5,
  },

  downArrowIcon: {
    width: "20px",
    height: "20px",
  },
  comments: {
    margin: "auto",
    maxWidth: "100%",
    color: "white",
    display: "flex",
  },
});
