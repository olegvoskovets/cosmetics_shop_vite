import css from "./Slide.module.css";
import img from "../../data/slide.json";

const Slide = () => {
  return (
    <section className={css.slide_section}>
      <div className="container">
        <picture title="slide image">
          <source srcSet={img[0].img_tablet} media="(max-width: 1280px)" />
          <source srcSet={img[0].img_dectop} />
          <img
            src={img[0].img_dectop}
            alt="image Slide"
            className={css.slide_img}
          />
        </picture>
      </div>
    </section>
  );
};

export default Slide;
