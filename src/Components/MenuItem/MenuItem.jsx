import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import css from "./MenuItem.module.css";
import menuOfCategory from "../../data/menuOfCategory.json";
import { useDispatch } from "react-redux";
import { updateMenu } from "../../redux/MenuDropDown/menuDropDownSlice";

const MenuItem = ({ item }) => {
  const dispatch = useDispatch();
  const updateMenuOfCategory = (item) => {
    const menu = menuOfCategory.find((el) => el.category === item);
    if (menu) {
      dispatch(updateMenu(menu.menu));
    } else {
      dispatch(updateMenu(false));
    }
  };
  return (
    <Link className={css.menu_item}>
      <li onMouseEnter={() => updateMenuOfCategory(item)}>{item}</li>
    </Link>
  );
};

MenuItem.propTypes = {
  item: PropTypes.string,
};
export default MenuItem;
