import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card.jsx'


function Home(props) {

  console.log('homr props',props);
  return (
    <div>
    <Link to="/"><Card setSingleProduct={props.setSingleProduct} data={props.data}/></Link>
      
    </div>
  )
}

export default Home
