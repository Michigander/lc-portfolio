import React from 'react'

import Header from 'components/Header/Header.jsx'
// import Nav from 'components/Nav/Nav.jsx'
import './Page.css'

const Page = ({children}) => 
  <div className="page"> 
    <Header />
    <div className="page__content">
      { children }
    </div>
  </div>

export default Page