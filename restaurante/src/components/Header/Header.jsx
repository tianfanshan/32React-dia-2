import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <span>Header</span>
      <div>
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