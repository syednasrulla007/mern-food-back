import React, { useState } from 'react'
import axios from 'axios'
import "./user.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Register= () => {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()
  
  const handlesubmit= async (e)=>{
    e.preventDefault()
    try {
      await axios.post("https://food-backend-zcam.onrender.com/auth/register" , {
        username,
        password,
      })
      alert("registeration completed now login !!!")
    } catch (error) {
      console.error("error")
      
    }
  }
  return (
    
<div className='login'> 
<i class="fa fa-times" onClick={()=>{navigate("/")}}></i>
<form on onSubmit={handlesubmit}>
<h2>Create an Account</h2>

<div className='inputdiv'><label htmlFor='username'>Username</label>
<input type='text' id='username' placeholder='Enter UserName Here' value={username} required onChange={(e)=>{
  setUsername(e.target.value)
}}/></div>
<div className='inputdiv'><label htmlFor='password'>Password</label>
<input type='password' id='password' placeholder='Enter Password Here' value={password} required onChange={(e)=>{
  setPassword(e.target.value)
}}/></div>
<button type='submit' className='yellow'>Create Account</button>
</form>

<p>Already a Member?<Link to="/auth" className='link'>Log In</Link> </p>

</div>
  )
}



export default Register