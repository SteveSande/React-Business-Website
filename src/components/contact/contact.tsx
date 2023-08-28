import ContactCSS from "./contact.module.css";

function Contact() {
  return (
    <div id="contact" className={ContactCSS.contact}>
      <h3>Contact me on social media.</h3>
      <div id="social-links">
        <a
          id="linkedin-link"
          target="_blank"
          href="https://www.linkedin.com/in/steven-sande-a4264752/"
        >
          <img
            id="linkedin-logo"
            className={ContactCSS.socialIcon}
            src="LinkedInLogo.svg"
          />
        </a>
        <a
          id="instagram-link"
          target="_blank"
          href="https://www.instagram.com/interiorecology/"
        >
          <img
            id="instagram-logo"
            className={ContactCSS.socialIcon}
            src="InstaLogo.png"
          />
        </a>
      </div>
    </div>
  );
}

export default Contact;
