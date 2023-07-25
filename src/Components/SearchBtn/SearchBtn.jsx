import css from "./SearchBtn.module.css";
import { AiOutlineSearch } from "react-icons/ai";
const SearchBtn = () => {
  return (
    <button className={css.search_btn}>
      <AiOutlineSearch className={css.icons} />
      <span>Пошук</span>
    </button>
  );
};

export default SearchBtn;
