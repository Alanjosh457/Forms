import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Moviebox from './Moviebox'
import Moviechip from './Moviechip'
const MOVIES=[
  
  { id: 0, movie: "Action" },
  { id: 1, movie: "Drama" },
  { id: 2, movie: "Thriller" },
  { id: 3, movie: "Western" },
  { id: 4, movie: "Fantasy" },
  { id: 5, movie: "Fiction" },
  { id: 6, movie: "Music" },
  { id: 7, movie: "Horror" },
  { id: 8, movie: "Science" }


  
]
const Selection = () => {
  const [selmovs,setMovs]=useState([])
  const navi=useNavigate()

  const hansel=()=>{
    if(selmovs.length<3){
      alert("Mininum 3 categories must be selected")
      return
    }

    else{
      localStorage.setItem('selmovies',JSON.stringify(selmovs))
      setMovs([])
      navi("/Info")

    }

  }
  
 
  return (
    <div>
      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(3, 1fr)",
      }}>
        {MOVIES.map((category)=>(
          <div key={category.id}><Moviebox selmovs={selmovs} setMovs={setMovs} category={category}/>
          </div>

        ))}

      </div>
      {
        selmovs.length<3 && 
          (
            <p className='selErr'> 
            Mininum 3 selections are required

            </p>
          )
        }
        <div>
          {selmovs.map((category)=>(
            <p key={category.id}> <Moviechip  key={category.id} setMovs={setMovs} category={category}
             
            /></p>
          ))}
        </div>
        <button onClick={hansel}>Next</button>
    </div>
  )
}

export default Selection