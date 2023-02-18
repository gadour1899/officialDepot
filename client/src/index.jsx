import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Signeupf from '../src/Signeupf.jsx'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Signf from './Signf.jsx'

const App = () => {
  const [companyname,setcompanyName]=useState('')


  useEffect(()=>{(
      async()=>{
        const response=await fetch("http://localhost:3000/api/fournisseur/getf",{
          headers: {'Content-Type': 'application/json'},
          credentials :'include',
        })
        const content=await response.json()
        setcompanyName(content.companyname)
      }
    )
  })

  return (
    <div className='App'>
    {/* <Router>
    <Routes>
    <Route path='/' element={<Signeupf/>} />
    <Route path='/loginf' element={<Signf setcompanyName={setcompanyName}/>} />
    </Routes>
    </Router> */}
  </div>
)
}

ReactDOM.render(<App />, document.getElementById('app'))
