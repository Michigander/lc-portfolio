import React from 'react'
import { Link } from 'react-router-dom'

import './LinkButton.css'

const LinkButton = ({ pathname, children, ...linkProps }) => 
  <Link {...linkProps} className={classNames.base(pathname === linkProps.to)}>
    { children }
  </Link>

export default LinkButton

const classNames = {
  base: (isSelected) => `
    caps
    link_button 
    ${isSelected && 'link_button--selected'}
  `
}