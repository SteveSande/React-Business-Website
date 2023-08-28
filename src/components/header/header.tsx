import HeaderCSS from "./header.module.css";

function Header() {
  return (
    <header className={HeaderCSS.header}>
      <img className={HeaderCSS.logo} src="IntEcoLogo.png" />
      <h1 className={HeaderCSS.name}>Interior Ecology Aquarium Services</h1>
      <h2 className={HeaderCSS.locations}>
        Serving the cities of Guelph, Kitchener, Waterloo, and Cambridge in
        Ontario, Canada
      </h2>
    </header>
  );
}

export default Header;
