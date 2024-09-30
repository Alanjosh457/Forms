
import { createRoot } from 'react-dom/client'

import './index.css'
import { BrowserRouter, Link, Route ,Routes} from "react-router-dom"
import Home from './Home'
import Info from './Info'
import Selection from './Selection'
import Browse from './Browse'
import Notfound from './Notfound'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
 {/*} <nav className='navbar'>
    <div className='contents'>
      <Link to="/home" className='home'>Home</Link>
    <Link to="/info" className='info'>Info</Link>
      <Link to="/selection">Selection</Link>
      <Link to="/browse">Browse</Link>
     
      </div>
  </nav>*/}
  <Routes>


    <Route path='/home' element={<Home/>}
   />
 
    <Route path='/info' element={<Info/>} />
    <Route path='/selection' element={<Selection/>} />
    <Route path='/browse' element={<Browse />} />
    <Route path='*' element={<Notfound />} />
    </Routes>
  
  </BrowserRouter>
   

)
