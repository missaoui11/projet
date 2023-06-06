import React,{useState} from 'react'
import { register } from '../redux/Action/Action'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Signup() {
  const [email ,setEmail] = useState("")
  const [password ,setPassword]   = useState("")
  const [name ,setName]   = useState("")
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(email)
  }
  const handleRegister=()=>{
    dispatch(register({name,email,password},navigate))
  }
  return (
    <div className='back'>
    <div className='auth-form-container'>
      <h2>Sign Up</h2>
       <form className='form' onSubmit={handleSubmit}>
         <label htmlFor='name'>Name</label>
         <input value={name} onChange={(e)=>setName(e.target.value)} type='name' placeholder='name' id='name' name='name' />
         <label htmlFor='email'>Email</label>
         <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='youremail@gmail.com' id='email' name='email' />
         <label htmlFor='password'>Password</label>
         <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='********' id='password' name='password' />
        <button onClick={handleRegister} type="submit" >Login</button>
      </form>
  </div>
  </div>
    
)}

export default Signup
