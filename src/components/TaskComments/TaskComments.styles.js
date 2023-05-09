import { createUseStyles } from "react-jss";

export const useTaskCommentsStyles = createUseStyles({
  comments: {
    margin: "auto",
    height: 220,
    width: 500,
    overflow: "hidden",
    overflowY: "scroll",
    padding: 10,
    "&::-webkit-scrollbar": {
      display: "none",
    },
    "& div:nth-child(even) ": {
      backgroundColor: "#293148FF",
      color: "white",
      "& button": {
        color: "white",
        "&:hover": {
          color: "red",
        },
      },
    },
  },

  commentValue: {
    marginTop: "20px",
    borderRadius: "10px",
    background: "#859298FF",
    color: "black",
    padding: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deleteComment: {
    background: "none",
    color: "black",
    border: "none",
    "&:hover": {
      color: "red",
    },
  },
});
