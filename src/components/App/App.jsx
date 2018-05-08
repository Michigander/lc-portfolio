import React from 'react'
import { HashRouter, Route, NavLink } from 'react-router-dom'

import './App.css'
import LOGO from 'components/Logo/LOGO.png'

import Art from 'components/Art/Art.jsx'
import About from 'components/About/About.jsx'
import Yoga from 'components/Yoga/Yoga.jsx'
import Landing from 'components/Landing/Landing.jsx'
import Logo from 'components/Logo/Logo.jsx'
import AppFooter from 'components/Footer/Footer.jsx'

const routes = [
  {
    path: "/",
    exact: true,
    footer: false,
    main: () => <Landing />
  },
  {
    path: "/about",
    footer: true,
    main: () => <About />,
  },
  {
    path: "/portfolio",
    footer: true,
    main: () => <Art />,
  },
  {
    path: "/yoga",
    footer: true,
    main: () => <Yoga />,
  },
]

const App = () => 
  <HashRouter>  
    <div className="App">
      <div className="App__header">
        <div className="App__header-logo-container">
          <img alt="Lauren's emblem" src={LOGO} className="App__header-logo" />
          <div className="App__header-title caps">
            LAUREN <span className="bold">CASEY</span>
          </div>
        </div>
      </div>
      { routes.map(route =>
          <Route 
            key={route.path}  
            path={route.path} 
            exact={route.exact}
            component={route.main} 
          />
        )}
      { routes.map(route =>
          <Route key={route.path} path={route.path} render={() => route.footer &&
            <div className="App__footer">
              <NavLink to="/portfolio" className="App__navlink link" activeClassName="App__navlink--active">
                portfolio
              </NavLink>
              <NavLink to="/about" className="App__navlink link" activeClassName="App__navlink--active">
                about
              </NavLink>
              <NavLink to="/yoga" className="App__navlink link" activeClassName="App__navlink--active">
                yoga
              </NavLink>
            </div>
          }/>
        )}
    </div>
  </HashRouter>

export default App