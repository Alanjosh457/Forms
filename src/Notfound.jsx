import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
  const navigate=useNavigate()
  return (

    <>
    <h1>Notfound</h1>


      <button onClick={()=>navigate("/Home")}>GO TO HOME</button>
    </>

  )
}

export default Notfound