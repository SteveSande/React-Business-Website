import InfoBlockCSS from './infoblock.module.css'

interface info {
    background: string;
    text: string;
    link: string;
}

function InfoBlock(props:info) {
    return (
        <div className={InfoBlockCSS.infoBlock}>
            <a target="_blank" href={props.link}>
                <img className={InfoBlockCSS.background} src={props.background} />
			</a>  
            <h1 className={InfoBlockCSS.text}>{props.text}</h1>
        </div>
    )
}
  
export default InfoBlock