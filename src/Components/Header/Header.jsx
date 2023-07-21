// import { NavLink } from "react-router-dom";
// import { BsTelephone } from "react-icons/bs";
// import { AiOutlineMenu } from "react-icons/ai";
// import { TbCategory } from "react-icons/tb";
// import { AiOutlineSearch } from "react-icons/ai";
// import { BiUser } from "react-icons/bi";
// import { SlBasket } from "react-icons/sl";

import { Link } from "react-router-dom";
import css from "./Header.module.css";
import { useSelector } from "react-redux";
import { selectViewPort } from "../../redux/Viewport/viewportSelectors";
// import Logo from "../Logo/Logo";

const Header = () => {
  const viewport = useSelector(selectViewPort);

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
      <section className={css.middle_header}></section>
      <section className={css.menu_header}></section>
      <section className={css.button_header}></section>
    </header>
    // <section className={css.Header}>
    //   <div className="container">
    //     <div className={css.headerContent}>
    //       <span className={css.span_icon}>
    //         <AiOutlineMenu className={css.header_menu} />
    //       </span>

    //       <Logo />
    //       <button className={css.btnCatalog} type="button">
    //         <TbCategory className={css.TbCategory} />
    //         <span>Каталог</span>
    //       </button>
    //       <div className={css.search}>
    //         <AiOutlineSearch />
    //         <input
    //           className={css.search_Input}
    //           type="text"
    //           placeholder="Я шукаю ..."
    //         />
    //         <button className={css.search_Btn}>Знайти</button>
    //       </div>
    //       <BsTelephone />
    //       <Link to="/cosmetics_shop_vite/">Home</Link>
    //       <NavLink to="contacts">Contacts</NavLink>
    //       <span className={css.span_icon}>
    //         <BiUser className={css.biUser_icon} />
    //       </span>
    //       <span className={css.span_icon}>
    //         <SlBasket className={css.slBasket} />
    //       </span>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Header;
