import { useSelector } from "react-redux";
import css from "./MenuItemDropDown.module.css";
import { selectMenu } from "../../redux/MenuDropDown/menuDropDownSelectors";
import { Link } from "react-router-dom";

const MenuItemDropDown = () => {
  const menu = useSelector(selectMenu);
  if (menu) {
    return (
      <ul className={css.menu_item_drop_drown}>
        {menu.map((item) => (
          <Link key={item} className={css.menu_Item_link}>
            <li>{item}</li>
          </Link>
        ))}
      </ul>
    );
  }
};

export default MenuItemDropDown;
