import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import css from "./MenuItem.module.css";

const MenuItem = ({ item }) => {
  return (
    <Link className={css.menu_item}>
      <span>{item}</span>
    </Link>
  );
};

MenuItem.propTypes = {
  item: PropTypes.string,
};
export default MenuItem;
