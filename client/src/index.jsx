import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import axios from 'axios'
import Cart from './Pannier.jsx'


const App = () => {


  return (
    <div>
      

 <Cart/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
