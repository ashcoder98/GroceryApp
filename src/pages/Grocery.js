import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
function Grocery() {
  return (
    <div className="Grocery">
      <div className='maincontainer'>
      <h1>Grocery Tracker</h1>
      <div className='add-item-box'>
        <input className='add-item-input' placeholder='Add new item...' />
      <FontAwesomeIcon icon={faPlusCircle} ></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
}

export default Grocery;