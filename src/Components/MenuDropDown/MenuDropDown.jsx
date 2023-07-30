// import { useDispatch } from "react-redux";
import css from "./MenuDropDown.module.css";
// import { updateMenuDropDown } from "../../redux/MenuDropDown/menuDropDownSlice";

import Brands from "../Brands/Brands";
import MenuItemDropDown from "../MenuItemDropDown/MenuItemDropDown";

const MenuDropDown = () => {
  // const dispatch = useDispatch();

  const closeMenuDropDown = () => {
    // dispatch(updateMenuDropDown());
  };

  return (
    <div
      className={css.menu_drop_down}
      onClick={closeMenuDropDown}
      // onMouseLeave={closeMenuDropDown}
    >
      <MenuItemDropDown />

      <Brands />
    </div>
  );
};

export default MenuDropDown;
