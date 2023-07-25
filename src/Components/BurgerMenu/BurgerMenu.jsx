import { GiHamburgerMenu } from "react-icons/gi";

import css from "./BurgerMenu.module.css";

const BurgerMenu = () => {
  return (
    <button className={css.burger_btn}>
      <GiHamburgerMenu className={css.burger_icons} />
      <span className={css.burger_text}>Menu</span>
    </button>
  );
};

export default BurgerMenu;
