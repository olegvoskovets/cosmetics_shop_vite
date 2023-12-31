import { HiOutlineShoppingBag } from "react-icons/hi";

import { GiSpartanHelmet } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import { BiUser } from "react-icons/bi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import css from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectViewPort } from "../../redux/Viewport/viewportSelectors";
import Menu from "../Menu/Menu";
import { updateMenuDropDown } from "../../redux/MenuDropDown/menuDropDownSlice";
import { selectMenuDropDown } from "../../redux/MenuDropDown/menuDropDownSelectors";
// import HeaderButton from "../HeaderButton/HeaderButton";
// import BurgerMenu from "../BurgerMenu/BurgerMenu";
// import SearchBtn from "../SearchBtn/SearchBtn";

const Header = () => {
  const viewport = useSelector(selectViewPort);
  const dispatch = useDispatch();
  const openMenu = useSelector(selectMenuDropDown);

  const menuDropDownClose = () => {
    
    if (openMenu === true) {
      dispatch(updateMenuDropDown());
    }
  };

  return (
    <header className={css.header}>
      <section className={css.top_header}>
        <div className="container">
          <div className={css.top_header_content}>
            <div className={css.top_header_left}>
              <Link to="delivery" className={css.nav_link}>
                <span>Безкоштовна доставка по Україні</span>
              </Link>
              {!viewport?.mobile && (
                <>
                  <Link to="action" className={css.nav_link}>
                    <span>Акції</span>
                  </Link>

                  <Link to="blog" className={css.nav_link}>
                    <span>Статті</span>
                  </Link>
                  <Link to="about" className={css.nav_link}>
                    <span>Про магазин</span>
                  </Link>
                </>
              )}
            </div>
            <div className={css.top_header_rigth}>
              <span className={css.nav_link_span}>Укр</span>
            </div>
          </div>
        </div>
      </section>
      <section className={css.middle_header}>
        <div className="container">
          <div className={css.middle_header_position}>
            <Link className={css.link_logo} to="/cosmetics_shop_vite/">
              <div className={css.logo_content}>
                <div className={css.top_logo}>
                  <GiSpartanHelmet />
                  <span>sevastyan</span>
                </div>
                <div className={css.button_logo}>
                  <span className={css.discover}>discover beauty</span>
                </div>
              </div>
            </Link>
            {viewport?.desktop && (
              <div className={css.search_block}>
                <div className={css.search_container}>
                  <input className={css.search} type="text" />
                  <button className={css.search_icon_btn}>
                    <GoSearch />
                  </button>
                </div>
              </div>
            )}
            <div className={css.btn_section}>
              <div className={css.btn_block}>
                <button className={css.profile_btn}>
                  <BiUser className={css.profile_user_icon} />
                  {!viewport.mobile && <span>Вхід до кабінету</span>}
                </button>
              </div>
              <div className={css.btn_block}>
                <button className={css.favorite_btn}>
                  <MdOutlineFavoriteBorder className={css.profile_user_icon} />
                  {!viewport.mobile && <span>Обране</span>}
                </button>
              </div>
              <div className={css.btn_block}>
                <button className={css.basket_btn}>
                  <HiOutlineShoppingBag className={css.profile_user_icon} />
                  {!viewport.mobile && <span>Кошик</span>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={css.menu_header} onMouseLeave={menuDropDownClose}>
        <div className="container">
          <Menu />
        </div>
      </section>
    </header>
  );
};

export default Header;
