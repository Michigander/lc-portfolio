import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import './App.css'

import Home from 'components/Home/Home.jsx'
import Art from 'components/Art/Art.jsx'
import About from 'components/About/About.jsx'
import Yoga from 'components/Yoga/Yoga.jsx'

const App = () => 
  <HashRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/yoga" exact component={Yoga} />
      <Route path="/art" exact component={Art} />      
    </Switch>
  </HashRouter>

export default App