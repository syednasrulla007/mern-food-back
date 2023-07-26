import React, { useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { RxCross2 } from 'react-icons/rx'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsChevronDown } from 'react-icons/bs'
// import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
//   const showNavbar = () =>{
// navref.ref.currrent.classList.toggle("ressponsive_nav")
//   }

  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);

  const handleOpen1 = () => {
      setOpen1(!open1);
  };
  const handleOpen2 = () => {
      setOpen2(!open2);
  };
  const handleOpen3 = () => {
      setOpen3(!open3);
  };
  const handleOpen4 = () => {
      setOpen4(!open4);
  };
  const handleOpen5 = () => {
      setOpen5(!open5);
  };
  const handleOpen6 = () => {
      setOpen6(!open6);
  };
  const handleOpen7 = () => {
      setOpen7(!open7);
  };

  return (
    <>
      <div className="empty"></div>
      <div className="navbar">
        <div>
          {" "}
          <h1 onClick={() => navigate("/")}>
            {" "}
            Food <span className="dot">.</span>
          </h1>
        </div>
        <button id='mobile-menu-icon' onClick={() => { setIsMobile(!isMobile) }}>
                    {isMobile ? <RxCross2 /> : <GiHamburgerMenu />}
                </button>
        <div className="mid">
          <div class="dropdown">
            <button class="dropbtn">RECIPES</button>
            <div class="dropdown-content">
              <Link to="/recipes/breakfast & brunch recipes">
                Breakfast & Brunch Recipes
              </Link>
              <Link to="/recipes/lunch recipes">Lunch Recipes</Link>
              <Link to="/recipes/appetizers & snack recipes">
                Appetizers & Snack Recipes
              </Link>
              <Link to="/recipes/dinner recipes">Dinner Recipes</Link>
              <Link to="/recipes/desert recipes">Dessert Recipes</Link>
              <Link to="/recipes/drink & cocktail recipes">
                {" "}
                Drink & Cocktail Recipes
              </Link>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn">POPULAr</button>
            <div class="dropdown-content">
              <Link to="/recipes/Trending Now">Trending Now</Link>
              <Link to="/recipes/Casserole Recipes">Casserole Recipes</Link>
              <Link to="/recipes/chili Recipes">chili Recipes</Link>
              <Link to="/recipes/Soup Recipes">Soup Recipes</Link>
              <Link to="/recipes/Pasta Recipes">Pasta Recipes</Link>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn">meat and sesfood</button>
            <div class="dropdown-content">
              <Link to="/recipes/Chicken Recipes">Chicken Recipes</Link>
              <Link to="/recipes/Salmon Recipes">Salmon Recipes</Link>
              <Link to="/recipes/Pork Chop Recipes">Pork Chop Recipes</Link>
              <Link to="/recipes/Ground Beef Recipes">Ground Beef Recipes</Link>
              <Link to="/recipes/Shrimp Recipes">Shrimp Recipes</Link>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn">healthy and diet</button>
            <div class="dropdown-content">
              <Link to="/recipes/Keto Recipes">Keto Recipes</Link>
              <Link to="/recipes/Healthy Recipes">Healthy Recipes</Link>
              <Link to="/recipes/Vegetarian Recipes">Vegetarian Recipes</Link>
              <Link to="/recipes/Vegan Recipes">Vegan Rec</Link>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn">holidays</button>
            <div class="dropdown-content">
              <a href="/recipes/Diner Party Recipes"> Dinner Party Recipes</a>
              <a href="/recipes/Game Day Recipes">Game Day Recipes</a>
              <a href="/recipes/Valentine's Day Recipes ">Valentine's Day Recipes</a>
              <a href="/recipes/St. Patrick's Day Recipes">St. Patrick's Day Recipes</a>
              <a href="/recipes/Easter Recipes">Easter Recipes</a>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn">cuisine</button>
            <div class="dropdown-content">
              <Link to="/recipes/Mexican Recipes">Mexican Recipes</Link>
              <Link to="/recipes/Italian Recipes">Italian Recipes</Link>
              <Link to="/recipes/Indian Recipes">Indian Recipes</Link>
              <Link to="/recipes/Thai Recipes">Thai Recipes</Link>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn">seosonal</button>
            <div class="dropdown-content">
              <Link to="/recipes/Spring Recipes">Spring Recipes</Link>
              <Link to="/recipes/Summer Recipes">Summer Recipes</Link>
              <Link to="/recipes/Fall Recipes">Fall Recipes</Link>
              <Link to="/recipes/Winter Recipes">Winter Recipes</Link>
            </div>
          </div>
        </div>

        <div className="third">
          <Link to="https://www.food.com/search/">
          {/* <Link to="https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}"> */}
            <button>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </Link>
          <Link to="/save">
            <button>
              <i class="fa-sharp fa-regular fa-bookmark"></i>
            </button>
          </Link>
          <Link to="/auth">
            <button>
              <i class="fa-regular fa-user"></i>
            </button>
          </Link>
        </div>
      </div>
      <div id={isMobile ? "dropdown2" : "navbar-recipe-categories"} className="drop">
                <div>
                    <button onClick={handleOpen1}>RECIPES &nbsp;<BsChevronDown /></button>
                    {open1 ? (
                        <ul className="menu">
                            <li className="menu-item">
                                <Link to='/recipes/breakfast & brunch recipes' onClick={() => setIsMobile(!isMobile)}>Breakfast & Brunch Recipes</Link>
                            </li>
                            <li className="menu-item">
                                <Link to='/recipes/lunch recipes' onClick={() => setIsMobile(!isMobile)}>Lunch Recipes</Link>
                            </li>
                            <li className="menu-item">
                                <Link to='/recipes/appetizers & snack recipes' onClick={() => setIsMobile(!isMobile)}>Appetizers & Snack Recipes</Link>
                            </li>
                            <li className="menu-item">
                                <Link to='/recipes/dinner recipes' onClick={() => setIsMobile(!isMobile)}>Dinner Recipes</Link>
                            </li>
                            <li className="menu-item">
                                <Link to='/recipes/desert recipes' onClick={() => setIsMobile(!isMobile)}>Desert Recipes</Link>
                            </li>
                            <li className="menu-item">
                                <Link to='/recipes/drink & cocktail recipes' onClick={() => setIsMobile(!isMobile)}>Drink & Cocktail Recipes</Link>
                            </li>
                           
                        </ul>
                    ) : null}
                </div>
                <div>
                    <button onClick={handleOpen2}>POPULAR &nbsp;<BsChevronDown /></button>
                    {open2 ? (
                        <ul className="menu">
                            <li className="menu-item">
                                <Link to='/recipes/Trending Now' onClick={() => setIsMobile(!isMobile)}>Trending Now</Link>
                            </li>
                            <li className="menu-item">
                                <Link to='recipes/Casserole Recipes' onClick={() => setIsMobile(!isMobile)}>Casserole Recipes</Link>
                            </li>
                            <li className="menu-item">
                                <Link to='/recipes/chili Recipes' onClick={() => setIsMobile(!isMobile)}>Chilli Recipes</Link>
                            </li>
                            <li className="menu-item">
                                <Link to='/recipes/Soup Recipes' onClick={() => setIsMobile(!isMobile)}>Soup Recipes</Link>
                            </li>
                            <li className="menu-item">
                                <Link to='/recipes/Pasta Recipes' onClick={() => setIsMobile(!isMobile)}>Pasta Recipes</Link>
                            </li>
                            
                        </ul>
                    ) : null}
                </div>
                <div>
                    <button onClick={handleOpen3}>MEAT AND SEAFOOD &nbsp;<BsChevronDown /></button>
                    {open3 ? (
                        <ul className="menu">
                            <li className="menu-item">
                                <Link to='/recipes/Chicken Recipes' onClick={() => setIsMobile(!isMobile)}>Chicken Recipes</Link>
                            </li>
                            <li className="menu-item">
                                <Link to='/recipes/Salmon Recipes' onClick={() => setIsMobile(!isMobile)}>Salmon recipes</Link>
                            </li>
                            <li className="menu-item">
                                <Link to='/recipes/Pork Chop Recipes' onClick={() => setIsMobile(!isMobile)}>Pork Chop recipes</Link>
                            </li>
                            <li className="menu-item">
                                <Link to='recipes/Ground Beef Recipes' onClick={() => setIsMobile(!isMobile)}>Ground Beef Recipes</Link>
                            </li>
                            <li className="menu-item">
                                <Link to='/recipes/Shrimp Recipes' onClick={() => setIsMobile(!isMobile)}>Shrimp Recipes</Link>
                            </li>
                        </ul>
                    ) : null}
                </div>
                <div>
                    <button onClick={handleOpen4}>HEALTHY AND DIET &nbsp;<BsChevronDown /></button>
                    {open4 ? (
                        <ul className="menu">
                            <li className="menu-item">
                                <Link to='/recipes/Keto Recipes' onClick={() => setIsMobile(!isMobile)}>Keto recipes</Link>
                            </li>
                            <li className="menu-item">
                                <Link to='/recipes/Healthy Recipes' onClick={() => setIsMobile(!isMobile)}>Healthy Recipes</Link>
                            </li>
                            <li className="menu-item">
                                <Link to='/recipes/Vegetarian Recipes' v>Vegetarian Recipes</Link>
                            </li>
                            <li className="menu-item">
                                <Link to='/recipes/Vegan Recipes' onClick={() => setIsMobile(!isMobile)}>Vegan Recipes</Link>
                            </li>
                            
                        </ul>
                    ) : null}
                </div>
                <div>
                    <button onClick={handleOpen5}>HOLIDAYS &nbsp;<BsChevronDown /></button>
                    {open5 ? (
                        <ul className="menu">
                            <li className="menu-item">
                                <Link to='/recipes/Diner Party Recipes' onClick={() => setIsMobile(!isMobile)}>Dinner Party Recipes</Link>
                            </li>
                            <li className="menu-item">
                                <Link to='/recipes/Game Day Recipes' onClick={() => setIsMobile(!isMobile)}>Game Day Recipes</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/recipes/Valentine's Day Recipes " onClick={() => setIsMobile(!isMobile)}>Valentine's Day recipes</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/recipes/St. Patrick's Day Recipes" onClick={() => setIsMobile(!isMobile)}>St. Patrick's Day Recipes</Link>
                            </li>
                            <li className="menu-item">
                                <Link to='/recipes/Easter Recipes' onClick={() => setIsMobile(!isMobile)}>Easter Recipes</Link>
                            </li>
                            
                        </ul>
                    ) : null}
                </div>
                <div>
                    <button onClick={handleOpen6}>CUISINE &nbsp;<BsChevronDown /></button>
                    {open6 ? (
                        <ul className="menu">
                            <li className="menu-item">
                                <Link to='/recipes/Mexican Recipes' onClick={() => setIsMobile(!isMobile)}>Mexican recipes</Link>
                            </li>
                            <li className="menu-item">
                                <Link to='/recipes/Italian Recipes' onClick={() => setIsMobile(!isMobile)}>Italian Recipes</Link>
                            </li>
                            <li className="menu-item">
                                <Link to='/recipes/Indian Recipes' onClick={() => setIsMobile(!isMobile)}>Indian Recipes</Link>
                            </li>
                            <li className="menu-item">
                                <Link to='/recipes/Thai Recipes' onClick={() => setIsMobile(!isMobile)}>Thai Recipes</Link>
                            </li>
                           
                        </ul>
                    ) : null}
                </div>
                <div>
                    <button onClick={handleOpen7}>SEASONAL &nbsp;<BsChevronDown /></button>
                    {open7 ? (
                        <ul className="menu">
                            <li className="menu-item">
                                <Link to='/recipes/Spring Recipes' onClick={() => setIsMobile(!isMobile)}>Spring Recipes</Link>
                            </li>
                            <li className="menu-item">
                                <Link to='/recipes/Summer Recipes' onClick={() => setIsMobile(!isMobile)}>Summer Recipes</Link>
                            </li>
                            <li className="menu-item">
                                <Link to='//recipes/Fall Recipes' onClick={() => setIsMobile(!isMobile)}>Fall Recipes</Link>
                            </li>
                            <li className="menu-item">
                                <Link to='/recipes/Winter Recipes' onClick={() => setIsMobile(!isMobile)}>Winter Recipes</Link>
                            </li>
                        </ul>
                    ) : null}
                </div>
            </div>
    </>
  );
};

export default Navbar;
