import { Button } from "@mui/material";
import { useNotFoundStyles } from "./NotFound.styles";
import { NavLink } from "react-router-dom";
import { HOME } from "../../constants/auth";
function NotFound() {
  const styles = useNotFoundStyles();
  return (
    <div className={styles.parent}>
      <div>
        <div className={styles.oops}>Ooops!</div>
        <div className={styles.notFound}>404 - PAGE NOT FOUND</div>
        <NavLink to={HOME} style={{ textDecoration: "none" }}>
          <Button>Got To HomePage</Button>
        </NavLink>
      </div>
    </div>
  );
}
export default NotFound;
