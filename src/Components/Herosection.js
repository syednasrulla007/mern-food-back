import React from 'react'
import "./herosection.css"
import { Link } from 'react-router-dom'


const Herosection = () => {
    
  return (
    
    <div className='herodiv'>
    
      <img className='mainimg' alt='img' src='https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_1280,ar_16:9/v1/img/recipes/24/25/3/l3Fx6AnTcGOjhwYNhggo_0S9A9332.jpg'></img>
      <div className='insidediv'> <h1 className='c1'>56 grilled chicken<br/>recipes</h1> 
      <Link to="/api1"><button type='submit' className='c2'>see them all</button></Link></div>
    </div>
  )
}

export default Herosection