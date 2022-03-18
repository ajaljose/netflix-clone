import '../style/Header.css'
import React from 'react'

function Header() {
  return (
    <div className='navbar'>
        <img className='netflixLogo' src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
        <a>Home</a>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
    </div>
  )
}

export default Header