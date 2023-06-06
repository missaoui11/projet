
import React, {useState} from 'react';
import { login } from '../redux/Action/Action';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Signin() {
  const [email ,setEmail] = useState("")
  const [password ,setPassword]   = useState("")
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault();
  }
  const handleLogin=()=>{
    dispatch(login({email,password},navigate))
  }
  console.log(email,password)
  
  return (
    <div className='back'>
    <div className='auth-form-container'>
      <h2>Sign In</h2>
      <form className='form' onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='youremail@gmail.com' id='email' name='email' />
        <label htmlFor='password'>Password</label>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='********' id='password' name='password' />
        <button type="submit" onClick={handleLogin}>Log In</button>
     </form>
   </div>
   </div>
  )
}

export default Signin
