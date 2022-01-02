import './App.css';
import Nav from './components/Nav';
import {Routes, Route} from 'react-router-dom'
import Grocery from './pages/Grocery';
import Recipe from './pages/Recipe';


function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <Routes>
          <Route path="/grocery" element={ <Grocery /> }>
          </Route>
          <Route path="/recipes" element={ <Recipe /> }>
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
