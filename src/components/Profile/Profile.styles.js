import { createUseStyles } from "react-jss";

export const useProfileStyles = createUseStyles({
  parent: {
    background: "#333333",
    height: "100%",
  },
  main: {
    paddingTop: 120,
    background: "#333333",
  },
  menu: {
    width: "100%",
    minHeight: "100px",
    position: "fixed",
    zIndex: "10",
    background: "#535353",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
  menuRight: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",

    alignItems: "center",
    "& div": {
      padding: "0 10px",
    },
  },
  userName: {
    color: "#1976D2FF",
  },
  menuLeft: {
    display: "flex",
    justifyContent: "space-baetween",
    alignItems: "center",
    "& div": {
      padding: " 0 10px",
    },
  },
  arrowDownwardIcon: {
    padding: 0,
    background: "none",
    border: 0,
  },

  notifications: {
    height: 350,
    position: "absolute",
    width: 300,
    border: "1px solid",
    background: "#849298FF",
    borderRadius: 10,
    top: 40,
    right: "1%",
    overflow: "hidden",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  descriptionCategory: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    "@media (max-width: 850px)": {
      marginTop: "100px",
    },
  },
  description: {
    textAlign: "left",
    "& p": {
      width: "350px",
      borderRadius: "8px",
      transition: "0.6s",
      color: "white",
      boxShadow:
        "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
    },
  },
  category: {
    margin: 0,
    color: "#04AA6D",
    letterSpacing: "3px",
    display: "flex",
    justifyContent: "space-between",
    transition: "0.4s",
    "&:hover": {
      color: "#2A9949FF",
      transform: "scale(1.01)",
    },
  },
  deleteCategory: {
    background: "none",
    color: "red",
    border: "none",
  },
  task: {
    margin: "auto",
    marginTop: 20,
    width: "80%",
    backgroundImage: "linear-gradient(to right, #283048 , #519A98)",
    textAlign: "center",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    paddingRight: 20,
    alignItems: "center",
    borderRadius: "30px",
    "@media (max-width:600px)": {
      fontSize: 13,
    },
  },
  taskFirstChild: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& p": {
      padding: "0px 10px",
    },
  },
  deleteTask: {
    background: "none",
    color: "black",
    border: "none",
    "&:hover": {
      color: "red",
    },
  },
  commentsResponses: {
    margin: "auto",
    maxWidth: "70%",
    textAlign: "center",
    color: "white",
    display: "flex",
    flexWrap: "wrap",
    "@media (max-width:600px)": {
      fontSize: 14,
    },
  },

  "@media (max-width: 1070px)": {
    menuRight: {
      flexWrap: "wrap",
      "& button": {
        fontSize: 10,
        margin: 2,
        width: 160,
      },
    },
  },
  "@media (max-width: 850px)": {
    avatar: {
      width: 500,
    },
  },
  taskName:{
    color: '#FFFACD',
    fontWeight: 'bold',
    fontSize: '1rem',
    lineHeight: 1.2,
    border: '2px solid #FFFACD',
    padding: '0.8rem',
    borderRadius: '17px',
  },
  taskDescription:{
    color: '#FFFACD',
    fontStyle: 'italic',
    fontSize: '0.8rem',
    lineHeight: 1.3,
    textAlign: 'justify',
    fontFamily: 'Montserrat, sans-serif',
    textAlign: 'center',

    
  }
});
