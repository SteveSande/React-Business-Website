import FooterCSS from "./footer.module.css";
import Contact from "../contact/contact";
import About from "../about/about";

function Footer() {
  return (
    <footer id="footer" className={FooterCSS.footer}>
      <img
        id="footer-logo"
        className={FooterCSS.logo}
        src="IntEcoLogo.webp"
        alt="the outline of a fish surrounded by bubble, all in cerulean blue"
      />
      <About />
      <Contact />
    </footer>
  );
}

export default Footer;
