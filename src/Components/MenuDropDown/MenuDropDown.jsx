import { useDispatch } from "react-redux";
import css from "./MenuDropDown.module.css";
import { updateMenuDropDown } from "../../redux/MenuDropDown/menuDropDownSlice";

const MenuDropDown = () => {
  const dispatch = useDispatch();

  const closeMenuDropDown = () => {
    dispatch(updateMenuDropDown());
  };

  return (
    <div className={css.menu_drop_down} onClick={closeMenuDropDown}>
      MenuDropDown
    </div>
  );
};

export default MenuDropDown;
