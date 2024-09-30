
import React from 'react'
const Moviechip = ({category,setMovs}) => {
  const rem=(category)=>{
   
    setMovs((selmovs)=>
      selmovs.filter((movie)=>movie!==category)
    )
     
  }
  return (
    <div ><button  >{category.movie} <span onClick={()=>rem(category)}>x</span></button></div>
  )
}
export default Moviechip