import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import axios from 'axios'
import SignUpUser from './SignUpUser.jsx'

const App = () => {

  return (
    <div>
     <SignUpUser/>
    </div>   
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
