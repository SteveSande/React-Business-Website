import FooterCSS from './footer.module.css'
import Contact from './contact/contact'
import About from './about/about'

function Footer() {
    return (
      <footer className={FooterCSS.title}>
        <ul className={FooterCSS.tileList}>
            <li className={FooterCSS.tile}>
                <img className={FooterCSS.logo} src='IntEcoLogo.png' />
            </li>
            <li className={FooterCSS.tile}>
              <About />       
            </li>
            <li className={FooterCSS.tile}>
              <Contact />
            </li>
        </ul>
      </footer>
    )
  }
  
  export default Footer