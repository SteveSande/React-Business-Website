import FooterCSS from './footer.module.css'

function Footer() {
    return (
      <footer className={FooterCSS.title}>
        <ul className={FooterCSS.tileList}>
            <li className={FooterCSS.tile}>
                <img src='IntEcoLogo.svg' />
            </li>
            <li className={FooterCSS.tile}>
                <h1>Interior Ecology Aquarium Services</h1>
            </li>
        </ul>
      </footer>
    )
  }
  
  export default Footer