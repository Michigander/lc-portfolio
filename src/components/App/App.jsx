import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import Home from 'components/Home/Home.jsx'
import Art from 'components/Art/Art.jsx'

import './App.css'

const App = () => 
  <HashRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={Home} />
      <Route path="/yoga" exact component={Home} />
      <Route path="/art" exact component={Art} />      
    </Switch>
  </HashRouter>

export default App