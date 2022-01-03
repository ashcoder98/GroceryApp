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
      const [input, setInput] = useState("");
      
      const [totalCount, setTotalCount] = useState(0);

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
          newItems[index].quantity++;
          setItems(newItems);
          addTotal();
   
      }
      const handleDecrease = (index) => {
        const newItems = [...items];
          newItems[index].quantity--;
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