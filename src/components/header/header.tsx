import HeaderCSS from './header.module.css'

function Header() {
    return (
      <header className={HeaderCSS.title}>
        <ul className={HeaderCSS.tileList}>
            <li className={HeaderCSS.tile}>
                <img src='IntEcoLogo.svg' />
            </li>
            <li className={HeaderCSS.tile}>
                <h1>Interior Ecology Aquarium Services</h1>
            </li>
        </ul>
      </header>
    )
  }
  
  export default Header