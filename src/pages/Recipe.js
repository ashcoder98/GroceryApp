import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHammer, faHardHat } from '@fortawesome/free-solid-svg-icons'

function Recipe() {
  return (
    <div className="Recipe">
      <h1><FontAwesomeIcon icon={faHardHat}></FontAwesomeIcon> Work in progress <FontAwesomeIcon icon={faHammer}></FontAwesomeIcon></h1>
      
    </div>
  );
}

export default Recipe;