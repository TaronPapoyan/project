import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Context";
import { HOME, PROFILE, SIGN_IN, SIGN_UP } from "../../constants/auth";
import { useMenuStyles } from "./Menu.styles";
import { Button } from "@mui/material";

function Menu({ buttonValue, buttonNavigate }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const styles = useMenuStyles();

  const onMyProfileClick = () => {
    navigate(PROFILE);
  };
  return user ? (
    <div>
      <NavLink to={PROFILE} style={{ textDecoration: "none", marginRight: 20 }}>
        <Button variant="contained" onClick={onMyProfileClick}>
          My Profile
        </Button>
      </NavLink>
      <NavLink to={HOME} style={{ textDecoration: "none" }}>
        <Button variant="outlined" onClick={() => logout()}>
          Sign Out
        </Button>
      </NavLink>
    </div>
  ) : (
    <div>
      <NavLink to={SIGN_IN} style={{ textDecoration: "none", marginRight: 20 }}>
        <Button variant="contained">Sign In</Button>
      </NavLink>
      <NavLink to={buttonNavigate} style={{ textDecoration: "none" }}>
        <Button variant="outlined" className={styles.register}>
          {buttonValue}
        </Button>
      </NavLink>
    </div>
  );
}
export default Menu;
