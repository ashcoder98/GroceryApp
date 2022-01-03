import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faChevronRight, faChevronLeft, faCircle, faCheckCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
function Grocery() {
  return (
    <div className="Grocery">
      <div className='maincontainer'>
      <h1>Grocery Tracker</h1>
      <div className='add-item-box'>
        <input className='add-item-input' placeholder='Add new item...' />
      <FontAwesomeIcon icon={faPlusCircle} ></FontAwesomeIcon>
        </div>
        <div className='item-list'>
					<div className='item-container'>
						<div className='item-name'>
							{false ? (
								<>
									<FontAwesomeIcon icon={faCheckCircle} />
									<span className='completed'>Item 1</span>
								</>
							) : (
								<>
									<FontAwesomeIcon icon={faCircle} />
									<span>Item 1</span>
								</>
							)}
						</div>
						<div className='quantity'>
							<button>
								<FontAwesomeIcon icon={faChevronLeft} />
							</button>
							<span> 1 </span>
							<button>
								<FontAwesomeIcon icon={faChevronRight} />
							</button>
						</div>
					</div>
				</div>
				<div className='total'>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          Total: 6
        </div>



      </div>
    </div>
  );
}

export default Grocery;