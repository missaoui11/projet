import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrent, update_user,deleteuser } from '../redux/Action/Action';
import  axios  from 'axios';

function Profile() {
  const [name,setName]=useState("")
  const [lastname,setLastname]=useState("")
  const [adress,setAdress]=useState("")
  const [phone,setPhone]=useState("")
  const [experience,setExperience]=useState("")
  const [image,setImage]=useState([])
  const dispatch=useDispatch()
  useEffect(() => {
   dispatch(getCurrent())
  }, [getCurrent])
  const user=useSelector((state)=>state.Reducer.user)
  console.log(user)
  var data ={name,lastname,adress,phone,experience}
  const formaData=new FormData()
  formaData.append('file',image)
  formaData.append('upload_preset','ml_default')
  if(image.length===undefined){
  axios.post('https://api.cloudinary.com/v1_1/dwb8dvmbw/upload',formaData).then((res)=>
  {  console.log(res.data.url)
    var images=res.data.url

   data={name,lastname,adress,phone,experience,image:images}
})}
console.log(data)
  const handlesave= ()=>{
   
    dispatch(update_user(user._id,data))

  }
  const handledelete=()=>{
    dispatch(deleteuser(user._id,data))
  }
  return (
    <div className='profileglobal'>
    <div className='profile'>
    <h1 >create or change or delete profil</h1>
    <form className='form' >
      <label> Name</label>
      <input onChange={(e)=>setName(e.target.value)} defaultValue={user.name} placeholder='name' />
      <label>Last Name</label>
      <input onChange={(e)=>setLastname(e.target.value)} placeholder='lastname' />
      <label>Adress </label>
      <input onChange={(e)=>setAdress(e.target.value)} placeholder='Adress' />
      <label>phone</label>
      <input onChange={(e)=>setPhone(e.target.value)} placeholder='phone ' />
      <label>experience</label>
      <input onChange={(e)=>setExperience(e.target.value)} placeholder='experience ' />
      <label>image</label>
      <input type='file' onChange={(e)=>setImage(e.target.files[0])} placeholder='experience ' />
      <button onClick={()=>handlesave()}>save</button>
      <button onClick={()=>handledelete()}>delete</button>
      </form>
      </div>
      </div>
      
      
   
  )
}

export default Profile

