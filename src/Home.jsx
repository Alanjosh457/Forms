import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate=useNavigate();
  const [data,setData]=useState({
    name :"",
    username :"",
    email :"",
    mobile :"",
    checkbox :false,
  })
  const [error,setError]=useState({
    name :"",
    username :"",
    email :"",
    mobile :"",
    checkbox :"",
  })
  
  const handlein=(e)=>{
    setData({
      ...data,
      [e.target.name]: e.target.type==="checkbox" ? e.target.checked :e.target.value
    })
   
  }
  
  const handlesub=(e)=>{
    e.preventDefault()
    let errors={}
    if(!data.name || data.name.trim()===""){
      errors.name="Name is required"
    }
    if(!data.email || data.email.trim()===""){
      errors.email="Userame is required"
    }
    if(!data.username || data.username.trim()===""){
      errors.username="email is required"
    }
    if(!data.mobile || data.mobile.trim()===""){
      errors.mobile="Mobile no is required"
    }
    if(!data.checkbox){
      errors.checkbox="checkbox is required"
    }
  
    setError(errors)
  
  if(Object.keys(errors).length>0) {
    return
  } 
  else{
    alert("Form submitted Sucessfully")
    localStorage.setItem('user',JSON.stringify(data))
    setData({
    name :"",
    username :"",
    email :"",
    mobile :"",
    checkbox :false,
  
    })
    navigate("/Selection")
  }
  }
  return (
    <div>
        <form className='frm'>
          <div className='cont'>
       
            <label>Name :</label>
            <input type='text'name='name'placeholder='Enter name here'value={data.name} onChange={handlein} className='inb'></input>
            <span className='error'>{error.name}</span>
            <label>Username :</label>
            <input type='text'name='username'placeholder='Enter username here' value={data.username} onChange={handlein} className='inb'></input>
            <span className='error'>{error.username}</span>
            <label>email :</label>
            <input type='email'name='email'placeholder='Enter email here' value={data.email} onChange={handlein} className='inb'></input>
            <span className='error'>{error.email}</span>
            <label>Mobile :</label>
            <input type='tel'name='mobile'placeholder='Enter mobile no here' value={data.mobile} onChange={handlein} className='inb'></input>
            <span className='error'>{error.mobile}</span>
            <div>
            <label htmlFor='checkbox' >Share my registeration data </label> 
             <input type='checkbox' id='checkbox'   name='checkbox'  onChange={handlein}></input>
       
            </div>
            <span className='error'>{error.checkbox}</span>
            <button type='submit' onClick={handlesub} id='sub'>Submit</button></div>
        </form>
    </div>
  )
}

export default Home