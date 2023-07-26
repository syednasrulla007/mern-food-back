import React from "react";
import "./savedrecipe.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Usegetuserid } from "../Hooks/Usegetuserid";

const Savedrecipea = () => {
  const [savedRecipes, setSavedRecipes] = useState([]);

  const userID = Usegetuserid();
  useEffect(() => {
    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `https://uiserverfood.onrender.com/recipes/savedrecipe/${userID}`
        );

        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSavedRecipes();
  });

  return (
    <div className="savedmain">
      <div>
        <h1 className="h">Saved Recipes</h1>
      </div>
      <ul>
        {savedRecipes.map((recipe) => (
          <li key={recipe._id}>
            <div>
              <h2>{recipe.name}</h2>
            </div>
            <div>
              <p>{recipe.instructions}</p>
            </div>
            <img src={recipe.image} alt={recipe.name} />
            <p>Cooking Time{recipe.cookingTime}(minutes) </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Savedrecipea;
