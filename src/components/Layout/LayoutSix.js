import { Fragment } from "react";
import { HeaderThree } from "../Header";
import { FooterOne } from "../Footer";
import ScrollToTop from "../scroll-to-top"

const LayoutThree = ({ children }) => {
  return (
    <Fragment>
      <HeaderThree />
      {children}
      <FooterOne />
      <ScrollToTop />
    </Fragment>
  );
};

export default LayoutThree;
