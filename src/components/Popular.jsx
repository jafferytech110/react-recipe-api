import { useEffect, useState } from "react";
import Slider from "./Slider";


function Popular() {
  const [popularRecipe, setPopularRecipe] = useState([]);

  useEffect(() => {
    getPopularRecipes();
  }, []);

  const getPopularRecipes = async () => {
    const checkStorage = localStorage.getItem('popularRecipe')

    if(checkStorage && popularRecipe.length !== 0) {
        setPopularRecipe(JSON.parse(checkStorage))
 
    }
    else{
        const apiToCall = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=41f64e89638741be8bc0743a88e7e749&number=9`
          );
          const data = await apiToCall.json();
          localStorage.setItem('popularRecipe',JSON.stringify(data.recipes))
          setPopularRecipe(data.recipes);

        };
    }
    
  return (
    <>
        <Slider recipe={popularRecipe} heading="Popular Picks"/>
    </>
  );
}

export default Popular;
