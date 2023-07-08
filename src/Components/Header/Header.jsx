import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

const Header = () => {
  return (
    <div className={css.Header}>
      <div className="container">
        <NavLink to="/cosmetics_shop_vite/">Home</NavLink>
        <NavLink to="contacts">Contacts</NavLink>
      </div>
    </div>
  );
};

export default Header;
