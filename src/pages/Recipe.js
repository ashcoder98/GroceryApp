import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHammer, faHardHat } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import axios from 'axios';

function Recipe() {
const [ recipe, setRecipe ] = useState(null)
  const url = `s=Arrabiata`
  
  useEffect (() => {axios.get(url)
    .then(response => {
      const recipes = response.data
      setRecipe(recipes)
      console.log(recipes)
    });

  }, []);
  
  
  return (
    <div className="Recipe">
      <h1><FontAwesomeIcon icon={faHardHat}></FontAwesomeIcon> Work in progress <FontAwesomeIcon icon={faHammer}></FontAwesomeIcon></h1>
      <h1>{meals.strIngredient1}</h1>
    </div>
  );
}

export default Recipe;