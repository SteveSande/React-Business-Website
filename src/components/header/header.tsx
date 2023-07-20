import HeaderCSS from './header.module.css'

function Header() {
    return (
      <header className={HeaderCSS.title}>
        <ul className={HeaderCSS.tileList}>
            <li className={HeaderCSS.tile}>
                <img className={HeaderCSS.logo} src='IntEcoLogo.png' />
            </li>
            <li className={HeaderCSS.tile}>
                <h1>Interior Ecology Aquarium Services</h1>
                <h2>Guelph, Kitchener, Waterloo, Cambridge (Ontario)</h2>
            </li>
        </ul>
      </header>
    )
  }
  
  export default Header