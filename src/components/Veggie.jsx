import { useEffect, useState } from "react";
import Slider from "./Slider";

function Veggie() {
  const [veggieRecipe, setVeggieRecipe] = useState([]);

  useEffect(() => {
    getVeggieRecipes();
  }, []);

  const getVeggieRecipes = async () => {
    const checkStorage = localStorage.getItem('veggieRecipe')

    if(checkStorage && veggieRecipe.length !== 0) {
        setVeggieRecipe(JSON.parse(checkStorage))
 
    }
    else{
        const apiToCall = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=41f64e89638741be8bc0743a88e7e749&number=9&tags=vegetarian`
          );
          const data = await apiToCall.json();
          localStorage.setItem('veggieRecipe',JSON.stringify(data.recipes))
          setVeggieRecipe(data.recipes);

        };
    }
    
  return (
    <>
        <Slider recipe={veggieRecipe} heading="Vegetarian Picks" />
    </>
  );
}

export default Veggie;
