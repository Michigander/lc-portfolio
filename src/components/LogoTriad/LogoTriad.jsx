import React from 'react'

import Logo from 'components/Logo/Logo.jsx'
import Nav from 'components/Nav/Nav.jsx'

import './LogoTriad.css'

const LogoTriad = () => 
  <div className="logo_triad">
    <div className="logo_triad__logo">
      <Logo />
    </div>
    <div className="logo_triad__title">
      Lauren Casey
    </div>
    <div className="logo_triad__nav">
      <Nav />
    </div> 
  </div>

export default LogoTriad
