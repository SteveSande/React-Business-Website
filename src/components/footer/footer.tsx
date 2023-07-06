import FooterCSS from './footer.module.css'

function Footer() {
    return (
      <footer className={FooterCSS.title}>
        <ul className={FooterCSS.tileList}>
            <li className={FooterCSS.tile}>
                <img className={FooterCSS.logo} src='IntEcoLogo.png' />
            </li>
            <li className={FooterCSS.tile}>
                <h3>Steve Sande</h3>
                <ul>
                  <li>Software Developer</li>
                  <li>Ecologist</li>
                  <li>Aquarist</li>
                </ul>            
            </li>
            <li className={FooterCSS.tile}>
              <h3>Contact me on social media.</h3>
              <div>
                <a target="_blank" href='https://www.linkedin.com/in/steven-sande-a4264752/'>
                  <img className={FooterCSS.socialIcon} src='LinkedInLogo.svg' />
                </a>
                <a target="_blank" href='https://www.instagram.com/interiorecology/'>
                  <img className={FooterCSS.socialIcon} src='InstaLogo.png' />
                </a>
              </div>
            </li>
        </ul>
      </footer>
    )
  }
  
  export default Footer