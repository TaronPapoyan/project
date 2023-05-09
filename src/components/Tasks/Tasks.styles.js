import { createUseStyles } from "react-jss";

export const useTasksStyle = createUseStyles({
  parent: {
    background: "#333333",
    color: "white",
    height: "100%",
    width: "100%",
  },
  menu: {
    width: "100%",
    minHeight: "50px",
    position: "fixed",
    zIndex: "10",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    background: "#535353",
    animation: "$example 5s ease-in-out infinite",
    "& div a button": {
      "@media (max-width: 550px)": {
        fontSize: "12px",
        padding: 3,
      },
    },
  },
  "@keyframes example": {
    "50%": { background: "#535353FF" },
    "50%": { background: "blue" },
    "50%": { background: "#FFFACD" },
  },
  "@keyframes fadeIn": {
    from: { opacity: 85 },
    to: { opacity: 1 },
  },
  main: {
    paddingTop: "120px",
    width: "100%",
    background: "#333333",
  },
  table: {
    margin: "auto",
    width: "80%",
    textAlign: "center",

    "& td": {
      textAlign: "center",
      padding: "16px",
      "@media (max-width: 850px)": {
        padding: "6px",
      },
    },
    "& tr:nth-child(even) ": {
      backgroundColor: "gray",
      color: "black",
    },

    "@media (max-width: 600px)": {
      parent: { fontSize: "12px" },
    },
  },
  "@media (max-width: 600px)": {
    parent: { fontSize: "12px" },
  },
  bntOpenTasks: {
    backgroundColor: "#519A98FF",
    color: "white",
    padding: "8px 10px",
    textTransform: "uppercase",
    borderRadius: "5px",
    border: "none",
    fontWeight: "bold",
    fontSize: "14px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "darkblue",
    },
  },
  haderEx: {
    color: "#FFFACD",
    fontWeight: "bold",
    lineHeight: 1.1,
    border: "5px solid #519A98FF",
    borderRadius: "17px",
    fontFamily: "Courier New, sans-serif",
  },
  userData: {
    color: "FFFACD",
    fontFamily: "Papyrus, Fantasy",
  },
  taskName: {
    color: "FFFACD",
    fontWeight: "bold",
    fontFamily: "Garamond, Serif",
  },
  taypeCategory: {
    margin: 0,
    color: "#04AA6D",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "space-between",
    transition: "0.4s",
    "&:hover": {
      color: "#2A9949FF",
      transform: "scale(1.01)",
    },
  },
});
