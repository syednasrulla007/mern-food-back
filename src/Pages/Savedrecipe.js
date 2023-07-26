import React from "react";
import "./savedrecipe.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Usegetuserid } from "../Hooks/Usegetuserid";

const Savedrecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);

  const userID = Usegetuserid();
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          "https://uiserverfood.onrender.com/recipes"
        );
        setRecipes(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `https://uiserverfood.onrender.com/recipes/savedrecipe/ids/${userID}`
        );

        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipes();
    fetchSavedRecipes();
  });
  const saverecipe = async (recipeID) => {
    try {
      const response = await axios.put(
        "https://uiserverfood.onrender.com/recipes",
        {
          recipeID,
          userID,
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const isRecipeSaved = (id) => savedRecipes.includes(id);

  return (
    <div className="savedmain">
      <div>
        <h1 className="h">Recipes</h1>
      </div>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <div>
              <h2>{recipe.name}</h2>
              <button
                onClick={() => saverecipe(recipe._id)}
                disabled={isRecipeSaved(recipe._id)}
              >
                {isRecipeSaved(recipe._id) ? "Saved" : "Save"}
              </button>
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

export default Savedrecipe;
