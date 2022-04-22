import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Download({name}){
    return <div className="download-icon">
        <FontAwesomeIcon size={"4x"} icon={faFileDownload}/>
        <span>{name}</span>
        </div>;
}