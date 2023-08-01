import css from "./Slide.module.css";
import img from "../../data/slide.json";
import { useEffect, useState } from "react";

const Slide = () => {
  const [imgSlide, setImgSlide] = useState(img);

  useEffect(() => {
    let i = 0;
    setInterval(() => {
      if (i === img.length) {
        i = 0;
      }
      setImgSlide(img[i]);
      i += 1;
    }, 5000);
  }, []);
  return (
    <section className={css.slide_section}>
      <div className="container">
        <picture title="slide image">
          <source srcSet={imgSlide.img_tablet} media="(max-width: 1280px)" />
          <source srcSet={imgSlide.img_dectop} />
          <img
            src={imgSlide.img_dectop}
            alt="image Slide"
            className={css.slide_img}
          />
        </picture>
      </div>
    </section>
  );
};

export default Slide;
