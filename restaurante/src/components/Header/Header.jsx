import React from 'react'
import { Link } from 'react-router-dom'
import '../Header/Header.css'

const Header = () => {
  return (
    <div className='header'>
      <span className='font'>
        <h1>留香楼</h1>
        <h3>Edificio donde dajas tu fragancia</h3>
        </span>
      <div className='link'>
        <span>
          <Link to ='/'>Home</Link>
        </span>
        <span>
          <Link to='/reserve'>Reserve</Link>
        </span>
        <span>
          <Link to='/address'>Address</Link>
        </span>
      </div>
    </div>
  )
}

export default Header