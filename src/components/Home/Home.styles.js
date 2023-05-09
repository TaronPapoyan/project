import { createUseStyles } from "react-jss";

export const useHomeStyles = createUseStyles({
  parent: {
    width: "100%",
    height: "100%",
    background: "#333333",
    color: "white",
  },
  top: {
    width: "100%",
  
    // position: "relative",
    background: "#535353FF",
    "& div": {
      position: "absolute",
      right: 10,
      top: 10,
    },
    animation: "$example 5s ease-in-out infinite",
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
    marginTop: 60,
    display: "grid",
    gridTemplateColumns: "5fr 3fr",
    background: "#333333",
    textAlign: "center",
  },
  types: {
    width: "350px",
    height: "55px",
    fontSize: "35px",
    background: "#519A98",
    borderRadius: "5px",
    margin: "auto",
    letterSpacing: 5,
  },

  downArrowIcon: {
    width: "40px",
    height: "50px",
    margin: "10px 0",
  },

  type: {
    color: "#519A98",
    fontWeight: "900",
    letterSpacing: 2,
    fontSize: 20,
    "& div": {
      padding: 3,
      transition: "0.3s",
    },

    "& div span": {
      transition: "0.3s",
      fontSize: "20px",
    },
    "& div span:hover": {
      display: "inline-block",
      color: "orange",
      transform: "scale(1.05)",
    },
  },

  description: {
    width: "70%",
    color: "#FFFACD",
    fontFamily: "verdana",
    margin: "auto",
    padding: "20px",
    transition: "0.5s",
    textAlign: "left",
    "&:hover": {
      color: "orange",
    },
  },
  label: {
    "& button": {
      width: "250px",
      height: "65px",
      fontSize: "35px",
      letterSpacing: 3,
    },
  },

  task: {
    padding: "20px 0",
    display: "grid",
    gridTemplateColumns: "space-around",
    paddingLeft: "10px",
    paddingRight: "10px",
    color: "#A52A2A",
    width: "470px",
    height: "100px",
    gridTemplateColumns: "1fr 4fr 1fr",
    borderRadius: "7%",

    borderTop: "5px solid  #519A98FF",
    borderRight: "5px solid #519A98FF",
    borderBottom: "5px solid  #519A98FF",
    borderLeft: "5px solid  #519A98FF",

    backgroundColor: "#FFFACD",
    boxShadow: "1px 5px 10px 5px rgba(0,0,0,0.25)",
    fontWeight: "bold",
    fontSize: "18px",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    lineHeight: "1",
    textTransform: "uppercase",
    letterSpacing: "1px",
    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
    margin: "20px auto",
  },
  taskType: {
    color: "#519A98FF",
  },

  bottom: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    background: "#333333",
  },
  buttonForOpen: {
    backgroundColor: "#519A98FF",
    color: "white",
    padding: "10px 20px",
    textTransform: "uppercase",
    borderRadius: "5px",
    border: "none",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "darkblue",
    },
  },
  tasksButtonToNavi: {
    display: "inline-block",
    padding: "1px 20px",
    border: "none",
    borderRadius: "20px",
    background: "#519A98FF",
    fontFamily: "Arial sans-serif",
    color: "black",
    fontSize: "20px",
    cursor: "pointer",
    textAlign: "center",
    transition: "all 0.6s ease-in-out",
    "& a": { color: "white" },
    "& a:hover": { color: "blue" },
    "&:hover": {
      background: "#FFFACD",
      color: "#2196f3",
      boxShadow: "0px 0px 10px 0px blue",
      transform: "scale(1.4)",
    },
    "&:active": {
      transform: "scale(0.9)",
    },
  },
  logotype: {
    display: "inline-block",
    height: "100px",
    width: "100px",
    marginRight: "10px",
    background: "url(./logo.png) no-repeat center center",
    backgroundSize: "contain",
    borderRadius: "50%",
    border: "4px solid #519A98FF",
  },
  stepOneH: {
    fontFamily: "Arial, sans-serif",
    fontSize: "36px",
    fontWeight: "bold",
    color: "#519A98FF",
    textTransform: "uppercase",
    letterSpacing: "1px",
    textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
  },
  "@media (max-width: 900px)": {
    main: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    tasks: {
      align: "centr",
    },
    description: {
      fontSize: "12px",
    },
  },
});
