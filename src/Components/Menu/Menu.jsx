import { useSelector } from "react-redux";
import menu from "../../data/menu.json";
import MenuItem from "../MenuItem/MenuItem";
import css from "./Menu.module.css";
import { selectViewPort } from "../../redux/Viewport/viewportSelectors";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import SearchBtn from "../SearchBtn/SearchBtn";
import HeaderButton from "../HeaderButton/HeaderButton";

const Menu = () => {
  const viewport = useSelector(selectViewPort);
  return (
    <>
      {viewport.desktop && (
        <ul className={css.menu_list}>
          {menu.map((item) => (
            <MenuItem key={item} item={item} />
          ))}
        </ul>
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
