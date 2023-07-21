// import { NavLink } from "react-router-dom";
// import { BsTelephone } from "react-icons/bs";
// import { AiOutlineMenu } from "react-icons/ai";
// import { TbCategory } from "react-icons/tb";
// import { AiOutlineSearch } from "react-icons/ai";
// import { BiUser } from "react-icons/bi";
// import { SlBasket } from "react-icons/sl";

import css from "./Header.module.css";
// import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className={css.header}>
      <section className={css.top_header}></section>
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
    //       <NavLink to="/cosmetics_shop_vite/">Home</NavLink>
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
