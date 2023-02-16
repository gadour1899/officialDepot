import React from 'react'

export const Singin = () => {
  return (
    <div>
        <form action="">
            <input type="text"
            placeholder='email'
            onChange={(e)=>{(e.target.value)}} /><br />
            <input type="text"
            placeholder='mot de passe'
            onChange={(e)=>{(e.target.value)}} /><br />
        </form>
        <button>add</button>
    </div>
  )
}
export default Singin