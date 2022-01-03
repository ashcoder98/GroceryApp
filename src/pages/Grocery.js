import '../App.css';
import {useState , useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faChevronRight, faChevronLeft, faCircle, faCheckCircle, faShoppingCart, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
function Grocery() {
// useState Code 
        const [items, setItems] = useState 
        ([
          { itemName: "bread", quantity: 1, isSelected: false },
          { itemName: "milk", quantity: 3, isSelected: true },
          { itemName: "oranges", quantity: 2, isSelected: false },
      ]);
      const [input, setInput] = useState("");
      
      const [totalCount, setTotalCount] = useState(0);
// useEffect Code 
// useEffect(() => {}, [])
// Helper functions
      const handleAddClick = () => {
        const newItem = {
          itemName: input,
          quantity: 1,
          isSelected: false,
        }
        const newItems = [...items, newItem];
        setItems(newItems);
        setInput("");
      }

      const handleIncrease = (index) => {
        const newItems = [...items];
        if (newItems[index].quantity < 10) {
          newItems[index].quantity++;
        }
        else if (newItems[index].quantity >= 10) {
          newItems[index].quantity = 10
        }
          setItems(newItems);
          addTotal();
   
      }
      const handleDecrease = (index) => {
        const newItems = [...items];
        if (newItems[index].quantity > 0) {
          newItems[index].quantity--;
        }
        else if (newItems[index].quantity <= 0) {
          newItems[index].quantity = 0
        }
          setItems(newItems);
          addTotal();
      }
      const toggle = (index) => {
        const newItems = [...items];
        newItems[index].isSelected = !newItems[index].isSelected;
        setItems(newItems)
      }
      const addTotal = () => {
        const totalCount = items.reduce((total, item)=>{
          return total + item.quantity
        }, 0);
        setTotalCount(totalCount)
      }
  return (
    <div className="Grocery">
      <div className='maincontainer'>
      <h1 className='trackertitle'>Grocery Tracker</h1>
      <div className='add-item-box'>
        <input value={input} onChange={(event)=> setInput(event.target.value)} className='add-item-input' placeholder='Add new item...' />
        <button >
      <FontAwesomeIcon icon={faPlusCircle} onClick={()=> handleAddClick()} ></FontAwesomeIcon>
        </button>
        </div>
        <div className='item-list'>
          {items.map((item, index)=>					<div className='item-container'>
						<div className='item-name'>
							{item.isSelected ? (
								<>
									<FontAwesomeIcon onClick={()=> toggle(index)} icon={faCheckCircle} />
									<span className='completed'>{item.itemName}</span>
                  <FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon>
								</>
							) : (
								<>
									<FontAwesomeIcon onClick={()=> toggle(index)} icon={faCircle} />
									<span>{item.itemName}</span>
								</>
							)}
						</div>
						<div className='quantity'>
							<button>
								<FontAwesomeIcon icon={faChevronLeft} onClick={()=> handleDecrease(index)} />
							</button>
							<span> {item.quantity} </span>
							<button >
								<FontAwesomeIcon icon={faChevronRight} onClick={()=> handleIncrease(index)} />
							</button>
						</div>
					</div>)}

				<div className='total'>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          <span className='totalnum'>Total: {totalCount}</span>
        </div>
				</div>



      </div>
    </div>
  );
}

export default Grocery;