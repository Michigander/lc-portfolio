import React from 'react'

import LogoTriad from 'components/LogoTriad/LogoTriad.jsx'

import './Header.css'

const Header = ({ children }) => 
  <div className="header">
    <div className="header__triad">
      <LogoTriad />
    </div>
  </div>

export default Header