import React from 'react'
import NavBar from './Nav'

import HeaderContent from './HeaderContent'
const Header = () => {
  return (
    <header className='py-4 bg-white'>
      <NavBar />
      <HeaderContent />
    </header>
  )
}

export default Header
