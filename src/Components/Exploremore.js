import React from 'react'
import "./exploremore.css"
import { Link } from 'react-router-dom'
const Exploremore = () => {
  <br></br>
  return (
    <><h1 className='exphead'>explore more </h1>
    <br></br>
    <br></br>
    <div className='explore'>
        <Link to="/recipes/grilled and bbq">  <div><img src='https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/5e1cc137-8dfe-4ab0-89f1-488cf8fd4450.jpg' alt='img' /><h4>grilling and bbq</h4> </div></Link>
        <Link to="/recipes/international eats"><div><img src='https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/0ba5e633-8a82-4412-9912-3e4b021d3f36.jpg' alt='img' /><h4>international eats</h4> </div></Link>
        <Link to="/recipes/breakast and brunch"><div><img src='https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/9985d8e3-87d3-4cfc-b312-b355a6630e76.jpg' alt='img'/> <h4>breakast and brunch</h4></div></Link>
        <Link to="/recipes/community picks"><div><img src='https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/b968c752-8018-429d-aa68-b0baf71a9129.jpg' alt='img' /><h4>community picks</h4> </div></Link>
        <Link to="/recipes/quick and easy"><div><img src='https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/0e6210a9-7b32-4bae-a8a2-b1f8178cd33a.jpg' alt='img' /><h4>quick and easy</h4> </div></Link>
        <Link to="/recipes/copycat recipes"><div><img src='https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_250,ar_1:1/foodcom/images/4c90f65d-398c-462c-a165-eeca9e73aa8a.jpg' alt='img' /><h4>copycat recipes</h4> </div></Link>

    </div>
    <br></br>
    <br></br>
    </>
  )
}

export default Exploremore