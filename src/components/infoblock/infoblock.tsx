import InfoBlockCSS from "./infoblock.module.css";

interface info {
  background: string;
  backgroundSmall: string;
  text: string;
  link: string;
  alt: string;
}

function InfoBlock(props: info) {
  return (
    <div id={props.text} className={InfoBlockCSS.infoBlock}>
      <a id="image-link" target="_blank" href={props.link}>
        <picture id="infoblock-bg">
          <source
            id="mobile-bg"
            srcSet={props.backgroundSmall}
            media="(max-width:700px)"
          />
          <img
            id="desktop-bg"
            className={InfoBlockCSS.background}
            src={props.background}
            alt={props.alt}
          />
        </picture>
      </a>
      <h1 id="caption" className={InfoBlockCSS.text}>
        {props.text}
      </h1>
    </div>
  );
}

export default InfoBlock;
