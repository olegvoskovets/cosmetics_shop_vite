import css from "./HeaderButton.module.css";
import { PiPercentBold } from "react-icons/pi";
import { GoGift } from "react-icons/go";
import { TbBrandShopee } from "react-icons/tb";
const HeaderButton = () => {
  return (
    <div className={css.button_header_position}>
      <div className={css.btn_block}>
        <button className={css.basket_btn}>
          <PiPercentBold className={css.icon_header_btn} />
          <span className={css.btn_text}>Розпродаж</span>
        </button>
      </div>
      <div className={css.btn_block}>
        <button className={css.basket_btn}>
          <GoGift className={css.icon_header_btn} />
          <span className={css.btn_text}>Акції</span>
        </button>
      </div>
      <div className={css.btn_block}>
        <button className={css.basket_btn}>
          <TbBrandShopee className={css.icon_header_btn} />
          <span className={css.btn_text}>Бренди</span>
        </button>
      </div>
    </div>
  );
};

export default HeaderButton;
