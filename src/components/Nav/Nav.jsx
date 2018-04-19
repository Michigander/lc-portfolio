import React from 'react'
import { withRouter } from 'react-router-dom';

import LinkButton from 'components/LinkButton/LinkButton.jsx'

import './Nav.css'

const Nav = ({ location: { pathname } }) => 
  <div className="nav">
    <LinkButton to="/about" pathname={pathname}>about</LinkButton>
    <LinkButton to="/art" pathname={pathname}>portfolio</LinkButton>
  </div>

export default withRouter(Nav)