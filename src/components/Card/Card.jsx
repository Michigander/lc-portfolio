import React from 'react'

import './Card.css'

const Card = ({className, children}) => 
  <div className={`card ${className}`}>
    { children }
  </div>

export default Card