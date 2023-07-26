import React from "react";
import { useState } from "react";
import "./save.css";
import axios from "axios";
import { Usegetuserid } from "../Hooks/Usegetuserid";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const userId = Usegetuserid();
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
    instructions: "",
    image: "",
    cookingTime: 0,
    userOwner: userId,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };
  const handleingredientChange = (e, idx) => {
    const { value } = e.target;
    const ingredients = recipe.ingredients;
    ingredients[idx] = value;
    setRecipe({ ...recipe, ingredients });
  };
  const addingredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };
  const onsubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://food-backend-zcam.onrender.com/", recipe);
      alert("recipe created successfully");
      navigate("/savedrecipe");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="form">
      <div className="ab">
        <p className="savehead">Add Your Own Recipes</p>
      </div>
      <form onSubmit={onsubmit}>
        <div className="hello">
          {" "}
          <label htmlFor="name">Name Of Recipe:</label>
          <input
            type="text"
            id="name"
            className="input"
            name="name"
            placeholder="Enter Name Here"
            onChange={handleChange}
          />
        </div>
        <div className="hello">
          {" "}
          <label htmlFor="ingredients">Ingredients:</label>
          {recipe.ingredients.map((ingredients, idx) => {
            return (
              <input
                type="text"
                className="input"
                key={idx}
                value={ingredients}
                placeholder="Enter Ingredients Here"
                name="ingredients"
                onChange={(e) => {
                  handleingredientChange(e, idx);
                }}
              />
            );
          })}
          <button
            onClick={addingredient}
            className="button "
            id="ingredients"
            type="button">Add ingredients
          </button>
        </div>

        <div className="hello">
          {" "}
          <label htmlFor="instructions">Instructions:</label>
          <textarea
            id="instructions"
            placeholder="Enter Instructions Here"
            name="instructions"
            onChange={handleChange}
          />
        </div>
        <div className="hello">
          {" "}
          <label htmlFor="image">Image Url:</label>
          <input
            type="text"
            className="input"
            id="name"
            placeholder="Add Image"
            onChange={handleChange}
            name="image"
          />
        </div>

        <div className="hello">
          <label htmlFor="cookingTime">Cooking Time(Min) :</label>
          <input
            type="number"
            className="input"
            id="cookingTime"
            placeholder="Add Time"
            name="cookingTime"
            onChange={handleChange}
          />
        </div>
        <div className="hello">
          {" "}
          <button type="submit" className="button">
            Create Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
