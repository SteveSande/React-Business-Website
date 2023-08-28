import FooterCSS from "./footer.module.css";
import Contact from "../contact/contact";
import About from "../about/about";

function Footer() {
  return (
    <footer className={FooterCSS.footer}>
      <img className={FooterCSS.logo} src="IntEcoLogo.png" />
      <About />
      <Contact />
    </footer>
  );
}

export default Footer;
