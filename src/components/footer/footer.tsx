import FooterCSS from './footer.module.css'

function Footer() {
    return (
      <footer className={FooterCSS.title}>
        <ul className={FooterCSS.tileList}>
            <li className={FooterCSS.tile}>
                <img src='IntEcoLogo.svg' />
            </li>
            <li className={FooterCSS.tile}>
                <h3>Steve Sande</h3>
                <ul>
                  <li>Software Developer</li>
                  <li>Ecologist</li>
                  <li>Aquarist</li>
                </ul>
                <a target="_blank" href='https://www.linkedin.com/in/steven-sande-a4264752/'>
                  <p>LinkedIn</p>
                </a>
            </li>
        </ul>
      </footer>
    )
  }
  
  export default Footer