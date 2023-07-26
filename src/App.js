import Navbar from "./Components/Navbar.js"
import './App.css';
import User from "./Pages/User.js"
import {Routes,Route} from "react-router-dom"
import Register from "./Pages/Register.js"
import Save from "./Pages/Save.js";
import Footer from "./Components/Footer.js";
import Home from "./Pages/Home.js"
import Pageapi from "./Pages/Pageapi.js";
import Savedrecipe from "./Pages/Savedrecipe.js";
import Savedrecipea from "./Pages/Savedrecipea.js";
import Category from "./Pages/Category.js"
import FindMoreRecipes from "./Components/FindMoreRecipes.js";
function App() {
  return (
    <div className="App">
   <Navbar/>
 
    <Routes>
    <Route path='/recipes/:recipename' element={<Category />}></Route>
      <Route path="/auth" element={<User/>}/>
    <Route path="/auth/register" element={<Register/>}/>
    <Route path="/save" element={<Save/>}/>
    <Route path="/savedrecipe" element={<Savedrecipe/>}/>
    <Route path="/savedrecipea" element={<Savedrecipea/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/api1" element={<Pageapi/>}/></Routes>
    <FindMoreRecipes/>
    <Footer/>
    </div>
  );
}

export default App;