import HeaderCSS from './header.module.css'

function Header() {
    return (
      <header className={HeaderCSS.title}>
        <ul className={HeaderCSS.tileList}>
            <li className={HeaderCSS.tile}>1</li>
            <li className={HeaderCSS.tile}>2</li>
            <li className={HeaderCSS.tile}>3</li>
            <li className={HeaderCSS.tile}>4</li>
        </ul>
      </header>
    )
  }
  
  export default Header