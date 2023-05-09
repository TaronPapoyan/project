import { createUseStyles } from "react-jss";

export const useSignUpStyles = createUseStyles({
  parent: {
    background: "#333333",
    textAlign: "center",
    height: "100%",
  },
  form: {
    width: "400px",
    height: "520px",
    position: "relative",
    top: "80px",
    margin: "auto",
    padding: "30px",
    background: "white",
    display: "flex",
    flexDirection: "column",
    borderRadius: "12px",
    "& span": {
      padding: "10px",
    },
  },
});
