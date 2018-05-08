import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

const Landing = () => 
  <div className="Landing">
    <Link to="/about" className="Landing__link"/>
  </div>

export default Landing