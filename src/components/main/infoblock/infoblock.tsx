import InfoBlockCSS from "./infoblock.module.css";

interface info {
  background: string;
  text: string;
  link: string;
  alt: string;
}

function InfoBlock(props: info) {
  return (
    <div className={InfoBlockCSS.infoBlock}>
      <a target="_blank" href={props.link}>
        <img
          className={InfoBlockCSS.background}
          src={props.background}
          alt={props.alt}
        />
      </a>
      <h1 className={InfoBlockCSS.text}>{props.text}</h1>
    </div>
  );
}

export default InfoBlock;
