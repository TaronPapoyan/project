import { createUseStyles } from "react-jss";

export const useTaskResponsesStyles = createUseStyles({
  responses: {
    margin: "auto",
    height: 220,
    width: 500,
    overflow: "hidden",
    overflowY: "scroll",
    padding: 10,
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  responseValue: {
    textAlign: "left",
    marginTop: "20px",
    borderRadius: "10px",
    background: "#293148FF",
    padding: "10px 20px",
  },
  suggest: {
    padding: "3px 5px",
    background: "#519A98",
    borderRadius: 10,
  },
  contact: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  deleteResponse: {
    background: "none",
    color: "white",
    border: "none",
    "&:hover": {
      color: "red",
    },
  },
});
