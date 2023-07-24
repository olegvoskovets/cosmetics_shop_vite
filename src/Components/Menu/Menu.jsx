import { useSelector } from "react-redux";
import menu from "../../data/menu.json";
import MenuItem from "../MenuItem/MenuItem";
import css from "./Menu.module.css";
import { selectViewPort } from "../../redux/Viewport/viewportSelectors";

const Menu = () => {
  const viewport = useSelector(selectViewPort);
  return (
    <>
      {viewport.desktop ? (
        <ul className={css.menu_list}>
          {menu.map((item) => (
            <MenuItem key={item} item={item} />
          ))}
        </ul>
      ) : (
        <span> menu</span>
      )}
    </>
  );
};

export default Menu;
