import { useDispatch, useSelector } from "react-redux";
import category from "../../data/category.json";
import MenuItem from "../MenuItem/MenuItem";
import css from "./Menu.module.css";
import { selectViewPort } from "../../redux/Viewport/viewportSelectors";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import SearchBtn from "../SearchBtn/SearchBtn";
import HeaderButton from "../HeaderButton/HeaderButton";
import MenuDropDown from "../MenuDropDown/MenuDropDown";
import { updateMenuDropDown } from "../../redux/MenuDropDown/menuDropDownSlice";
import { selectMenuDropDown } from "../../redux/MenuDropDown/menuDropDownSelectors";

const Menu = () => {
  const viewport = useSelector(selectViewPort);
  const dispatch = useDispatch();
  const openMenu = useSelector(selectMenuDropDown);

  const hendleMenuDropDown = () => {
    if (openMenu === false) {
      dispatch(updateMenuDropDown());
    }
  };
  return (
    <>
      {viewport.desktop && (
        <div className={css.menu_dropDown_position}>
          <ul className={css.menu_list} onMouseEnter={hendleMenuDropDown}>
            {category.map((item) => (
              <MenuItem key={item} item={item} />
            ))}
          </ul>
          {openMenu && <MenuDropDown />}
        </div>
      )}
      <div className={css.menu_btn}>
        {!viewport.desktop && <BurgerMenu />}
        {!viewport.mobile && <HeaderButton />}
        {!viewport.desktop && <SearchBtn />}
      </div>
    </>
  );
};

export default Menu;
