import ContactCSS from './contact.module.css'

function Contact() {
    return (
        <>
            <h3>Contact me on social media.</h3>
            <div>
                <a target="_blank" href='https://www.linkedin.com/in/steven-sande-a4264752/'>
                    <img className={ContactCSS.socialIcon} src='LinkedInLogo.svg' />
                </a>
                <a target="_blank" href='https://www.instagram.com/interiorecology/'>
                    <img className={ContactCSS.socialIcon} src='InstaLogo.png' />
                </a>
            </div>
        </>
    )
}
  
export default Contact