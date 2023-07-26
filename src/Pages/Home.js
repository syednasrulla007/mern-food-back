import React from 'react'
import Herosection from '../Components/Herosection'
import Cravingsection from '../Components/Cravingsection'
import Exploremore from '../Components/Exploremore'
// import { useParams } from 'react-router-dom'
import "./home.css"
const Home = () => {
    // const params=useParams()
  return (
    <div>
    <Herosection/>
    <Cravingsection/>
    <Exploremore/>

    <p className='exphead'>FAN FAVORITES</p><br></br>
    <div className='home1'>
                    <div>
                    <img src='https://img.sndimg.com/food/image/upload/f_auto,c_fill,q_80,w_621,fl_progressive,h_349/v1/img/recipes/51/17/52/ZlmHVdO4SU6PAXvJrm8q_0S9A7193.jpg' alt='LOADING'></img>
                    <div className='upimg'><p>Recipe</p>
                    <h4>ISRAELI SHAKSHUKA</h4>
                    </div>
                    </div>

                    <div>
                    <img src='https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_349,w_621/v1/img/recipes/53/37/81/Oj8Vhm2wT361z6MENukJ_0S9A2524.jpg' alt='LOADING'></img>
                    <div className='upimg'><p>Recipe</p>
                    <h4>FARMER'S QUICHE</h4>
                    </div>
                    </div>
                    <div>
                    <img src='https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,w_232,h_180/v1/img/recipes/27/20/8/LoLdAamfR02FY46yIy0B_crockpot-roast-4637.jpg' alt='LOADING'></img>
                    <div className='upimg'><p>Recipe</p>
                    <h4>ISRAELI SHAKSHUKA</h4>
                    </div>
                    </div>
                    <div>
                    <img src='https://img.sndimg.com/food/image/upload/w_483,h_372,fl_progressive,q_80,c_fill/v1/img/recipes/18/03/75/nDYKmCzLStaswDnIWg2H_0S9A7173.jpg' alt='LOADING'></img>
                    <div className='upimg'><p>Recipe</p>
                    <h4>QUICK AND EASY CHICKEN ENCHILADAS</h4>
                    </div>
                    </div>
                    <div>
                    <img src='https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_349,w_621/v1/img/recipes/53/37/81/Oj8Vhm2wT361z6MENukJ_0S9A2524.jpg' alt='LOADING'></img>
                    <div className='upimg'><p>Recipe</p>
                    <h4>VEGAN BACON</h4>
                    </div>
                    </div>
                    <div>
                    <img src='https://img.sndimg.com/food/image/upload/w_483,h_372,fl_progressive,q_80,c_fill/v1/img/recipes/19/14/19/QmQP2xL1QyOTq0Idbf1z_untitled-1226.jpg' alt='LOADING'></img>
                    <div className='upimg'><p>Recipe</p>
                    <h4>CHICKEN TIKKA TOMATO MASALA</h4>
                    </div>
                    </div>
                  
                    <div>
                    <img src='https://img.sndimg.com/food/image/upload/f_auto,c_fill,q_80,w_621,fl_progressive,h_349/v1/img/recipes/51/17/52/ZlmHVdO4SU6PAXvJrm8q_0S9A7193.jpg' alt='LOADING'></img>
                    <div className='upimg'><p>Recipe</p>
                    <h4>ISRAELI SHAKSHUKA</h4>
                    </div>
                    </div>

                    <div>
                    <img src='https://img.sndimg.com/food/image/upload/w_483,h_372,fl_progressive,q_80,c_fill/v1/img/recipes/18/03/75/nDYKmCzLStaswDnIWg2H_0S9A7173.jpg' alt='LOADING'></img>
                    <div className='upimg'><p>Recipe</p>
                    <h4>QUICK AND EASY CHICKEN ENCHILADAS</h4>
                    </div>
                    </div>

                  </div>
                  
    </div>
    
  )
}

export default Home