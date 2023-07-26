import React from 'react'
import './category.css'
import {  useParams } from 'react-router-dom'


const Category = () => {
    const params =useParams()

    return (
        <>
            <div className='category'>
              
                    <h2 id='recipe-categories-page-one-heading'>TOP 50 {params.recipename.toUpperCase()}  </h2>
                    <div className='mainimg'>
                       <div>
                    <img src='https://hips.hearstapps.com/hmg-prod/images/strawberry-spinach-salad-lead-6408a96c8fc25.jpg?crop=0.933xw:0.686xh;0.0176xw,0.165xh&resize=1200:*' alt='LOADING' className='m1'></img>
                    <div className='upimg'><p>Recipe</p>
                    <h4>SAVORY BREAKFAST TART</h4>
                    <p>"Wow! This savory tart is amazing. I followed the instructions as given.</p> 
                    <p>Will be making this one often. To make things easier, I've made a large batch of</p> 
                    <p>the jam and canned it so it's on the shelf whenever I want to whip up this delicious tart."</p>

                    <p>-oconojudi</p> 
                    <br></br>
                    <br></br>
                    <h5>Welcome to the joys of your favorite dish made healthy.</h5></div>
                    </div>

                    {/* <img src='https://img.sndimg.com/food/image/upload/fl_progressive,c_fill,q_80,h_349,w_621/v1/img/recipes/53/37/81/Oj8Vhm2wT361z6MENukJ_0S9A2524.jpg' alt='LOADING'></img>
                    <div className='upimg'><p>Recipe</p>
                    <h4>FARMER'S QUICHE</h4>
                    <p>“A very nice recipe! I've never made a crust using brown rice before,</p> 
                    <p>but it worked really well. It's a great option if you are looking for a gluten-free quiche.”</p>

                    <p>-DeliciousAsItLooks</p>

                     <br></br>
                    <h5>Welcome to the joys of your favorite dish made healthy.</h5></div> */}
                    </div>
                  
                    <div>
                    <img src='https://chefesrecipes.com/images/812/BoiledEggswithAnchovySoldiers.jpg' alt='LOADING' className='m2'></img>
                    <div className='upimg'><p>Recipe</p>
                    <h4>GORDON RAMSAY'S SCRAMBLED EGGS</h4>
                     <p>“I was treated to breakfast in bed this morning by my boyfriend,</p> 
                     <p>who made this recipe. It was 100% the best scrambled eggs I’ve ever had.</p> 
                     <p>They’re incredible with smoked salmon.”</p>

                     <p>-Cinnamonised</p>

                     <br></br>
                    <h5>Welcome to the joys of your favorite dish made healthy.</h5></div>
                    </div>
                    <div>
                    <img src='https://i1.wp.com/whatagirleats.com/wp-content/uploads/2023/04/top-shot-quiche-2-768x536.jpg' alt='LOADING' className='m3'></img>
                    <div className='upimg'><p>Recipe</p>
                    <h4>FARMER'S QUICHE</h4>
                    <p>“A very nice recipe! I've never made a crust using brown rice before,</p> 
                    <p>but it worked really well. It's a great option if you are looking for a gluten-free quiche.”</p>

                    <p>-DeliciousAsItLooks</p>



                    <br></br>
                    <h5>Welcome to the joys of your favorite dish made healthy.</h5></div>
                    </div>
                    <div>
                    <img src='https://cdn.mos.cms.futurecdn.net/rGhfDrRJdbXp5GYyFcEZXR.jpg' alt='LOADING' className='m4'></img>
                    <div className='upimg'><p>Recipe</p>
                    <h4>GORDON RAMSAY'S SCRAMBLED EGGS</h4>
                     <p>“I was treated to breakfast in bed this morning by my boyfriend,</p> 
                     <p>who made this recipe. It was 100% the best scrambled eggs I’ve ever had.</p> 
                     <p>They’re incredible with smoked salmon.”</p>

                     <p>-Cinnamonised</p>

                     <br></br>
                    <h5>Welcome to the joys of your favorite dish made healthy.</h5></div>
                    </div>
                    <div>
                    <img src='https://howtomakerecipes.com/wp-content/uploads/2022/12/shakshouka-recipe1-1024x682.jpg' alt='LOADING' className='m5'></img>
                    <div className='upimg'><p>Recipe</p>
                    <h4>ISRAELI SHAKSHUKA</h4>
                   <p>“A delicious, typical Israeli breakfast that really can be eaten as</p> 
                   <p>lunch or even dinner! The sauce can be made in advance, and reheated at</p> 
                   <p>the time the eggs are done. I reduced the amount of oil used to make it low-fat,</p> 
                   <p>but you can use more if you need to!”</p>
                   <p>-AniSarit</p>
                    <h5>Welcome to the joys of your favorite dish made healthy.</h5></div>
                    </div>
                    <div>
                    <img src='https://hips.hearstapps.com/hmg-prod/images/elote-1648154564.jpg?crop=0.889xw:0.594xh;0.0510xw,0.246xh&resize=980:*' alt='LOADING' className='m6'></img>
                    <div className='upimg'><p>Recipe</p>
                    <h4>Grilled corn</h4>
                    <p>“a classic at our summer dinners and BBQs, but when we want to make this classic side dish into the star of the show, we turn to elote. </p> 
                    <p>Elote (aka Mexican street corn) is an unbelievably popular antojito (little craving or street food) that you can find all over Mexico and the US”</p>

                    <p>-DeliciousAsItLooks</p>
                    <h5>Welcome to the joys of your favorite dish made healthy.</h5></div>
                    </div>
                    <div>
                    <img src='https://hips.hearstapps.com/hmg-prod/images/hawaiian-chicken-skewers-secondary-64a7155332a5b.jpg?crop=1xw:1xh;center,top&resize=980:*' alt='LOADING' className='m7'></img>
                    <div className='upimg'><p>Recipe</p>
                    <h4>Hawaiian Chicken Skewers</h4>
                    <p>“ an easy weeknight dinner or party side, grilled skewers are one of our go-to’s all season long. </p> 
                    <p>With sweet pineapple, chicken, red bell peppers, and onion these skewers are the ultimate summer dinner. ”</p>

                    <p>-DeliciousAsItLooks</p>
                    <h5>Welcome to the joys of your favorite dish made healthy.</h5></div>
                    </div>
                    <div>
                    <img src='https://hips.hearstapps.com/hmg-prod/images/cropped-ehg-20210707-delish-fast-and-fun-cover-046-1630099030.jpg?resize=1200:*' alt='LOADING' className='m8'></img>
                    <div className='upimg'><p>Recipe</p>
                    <h4>Sheet-Pan Lemon Butter Chicken Thighs</h4>
                    <p>“Butter makes everything better—especially when it’s mixed with lemon zest, thyme, and oregano, then slathered on baked chicken,</p> 
                    <p>but it worked really well. It's a great option if you are looking for a gluten-free quiche.”</p>

                    <p>-DeliciousAsItLooks</p>
                    <h5>Welcome to the joys of your favorite dish made healthy.</h5></div>
                    </div>
                  

                  </div>
        </>
    )
}

export default Category