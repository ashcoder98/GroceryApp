import { Link } from 'react-router-dom'
import '../App.css';

function Nav() {
  return (
    <div className="Nav">
      <nav className='navbar'>
          <ul>
            <Link to="/grocery">
            <li>Grocery Tracker</li>
            </Link>
            <Link to="/recipes">
            <li>Recipe Finder</li>
            </Link>
          </ul>
      </nav>
    </div>
  );
}

export default Nav;