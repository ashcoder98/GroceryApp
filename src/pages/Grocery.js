import '../App.css';
import {useState , useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faChevronRight, faChevronLeft, faCircle, faCheckCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
function Grocery() {

        const [items, setItems] = useState 
        ([
          { itemName: "item 1", quantity: 1, isSelected: false },
          { itemName: "item 2", quantity: 3, isSelected: true },
          { itemName: "item 3", quantity: 2, isSelected: false },
      ]);




  return (
    <div className="Grocery">
      <div className='maincontainer'>
      <h1 className='trackertitle'>Grocery Tracker</h1>
      <div className='add-item-box'>
        <input className='add-item-input' placeholder='Add new item...' />
      <FontAwesomeIcon icon={faPlusCircle} ></FontAwesomeIcon>
        </div>
        <div className='item-list'>
          {items.map((item, index)=>					<div className='item-container'>
						<div className='item-name'>
							{item.isSelected ? (
								<>
									<FontAwesomeIcon icon={faCheckCircle} />
									<span className='completed'>{item.itemName}</span>
								</>
							) : (
								<>
									<FontAwesomeIcon icon={faCircle} />
									<span>{item.itemName}</span>
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
					</div>)}

				<div className='total'>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          <span className='totalnum'>Total: 6</span>
        </div>
				</div>



      </div>
    </div>
  );
}

export default Grocery;