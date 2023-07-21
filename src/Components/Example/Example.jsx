import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { useMediaQuery } from "react-responsive";
import { writeDownViewport } from "../../redux/Viewport/viewportSlice";

let viewport = {
  mobile: false,
  tablet: false,
  desktop: false,
};

const Viewport = ({ children }) => {
  const dispatch = useDispatch();
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279.9 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  viewport = {
    mobile: isMobile,
    tablet: isTablet,
    desktop: isDesktop,
  };
  dispatch(writeDownViewport(viewport));

  return children;
};

const Example = ({ children }) => <Viewport>{children}</Viewport>;

Example.propTypes = {
  children: PropTypes.object,
};

Viewport.propTypes = {
  children: PropTypes.object,
};

export default Example;
