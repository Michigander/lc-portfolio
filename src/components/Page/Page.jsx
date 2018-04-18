import React from 'react'

import Header from 'components/Header/Header.jsx'
// import Nav from 'components/Nav/Nav.jsx'
import Logo from 'components/Logo/Logo.jsx'
import './Page.css'

const Page = ({children}) => 
  <div className="page"> 
    <Header>
      <Logo />
      <div className="page__name">
        Lauren Casey
      </div>
    </Header>
    <div className="page__content">
      { children }
    </div>
  </div>

export default Page