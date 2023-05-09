import { createUseStyles } from "react-jss";
export const useNotFoundStyles = createUseStyles({
  parent: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  oops: {
    fontSize: 120,
    fontWeight: "bold",
    color: "red",
  },
  notFound: {
    fontSize: 20,
    letterSpacing: 2,
  },
});