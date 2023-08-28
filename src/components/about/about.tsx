import AboutCSS from "./about.module.css";

function About() {
  return (
    <div id="profile" className={AboutCSS.profile}>
      <h3>Steve Sande</h3>
      <ul>
        <li>Software Developer</li>
        <li>Ecologist</li>
        <li>Aquarist</li>
      </ul>
    </div>
  );
}

export default About;
