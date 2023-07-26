import React from 'react'
import { useState } from 'react'
import "./save.css"
import Savedrecipe from './Savedrecipe'
import Form from './Form'
import { Link } from 'react-router-dom'

const Save = () => {
    const [count,setCount] = useState(false);
    function tara() {
      setCount(!count)
    }
    const [mount,setMount] = useState(true);
    function sitara() {
      setMount(!mount)
    }
   
    return (
        <div className='savemain'>
          <br></br>
            <button type='button' onClick={sitara} className='addb'>1.  Add Your Own Recipe</button>
            <br></br>
            <br></br>
            <Link to="/savedrecipe"><button type='button'  onClick={tara} className='addb'>2.  Added Recipes</button></Link> 
            <br></br>
            <br></br>
            <Link to="/savedrecipea"><button type='button'  onClick={tara} className='addb'>3.  Saved Recipes</button></Link>
            <br></br>   
            <br></br>   
            {count?<Savedrecipe />:null}
            {mount?<Form />:null}
            
        </div>
    )
}

export default Save