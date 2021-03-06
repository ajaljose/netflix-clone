import '../style/Header.css'
import React from 'react'

function Header() {
  return (
    <div className='navbar'>
        <img className='netflixLogo' src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
        <h5 className='mMovies'>Movies</h5>
        <h5 className='mSeries'>Series</h5>
        <img className='avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />        
    </div>
  )
}

export default Header