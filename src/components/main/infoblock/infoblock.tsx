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
    <div className={InfoBlockCSS.infoBlock}>
      <a target="_blank" href={props.link}>
        <picture>
          <source srcSet={props.backgroundSmall} media="(max-width:700px)" />
          <img
            className={InfoBlockCSS.background}
            src={props.background}
            alt={props.alt}
          />
        </picture>
      </a>
      <h1 className={InfoBlockCSS.text}>{props.text}</h1>
    </div>
  );
}

export default InfoBlock;
