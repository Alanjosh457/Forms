import React from 'react'


const Moviebox = ({category,
  selmovs,
  setMovs
}) => {
   const handleselection=(category)=> ()=>{
    if(selmovs.includes(category))
      {
setMovs(selmovs.filter((movie)=>movie!==category))
    }
else{
  setMovs([...selmovs,category])
}
    
    
     }
  return (
    <div style={{
      height: "150px",
     width: "150px",
  backgroundColor: "lightblue",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "10px",
  border: `2px solid" ${selmovs.includes(category)? "red" : "black"}`
 

    }}   onClick={handleselection(category)}><h1>{category.movie}</h1></div>
  )
}

export default Moviebox