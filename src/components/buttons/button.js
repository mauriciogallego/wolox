import React from 'react'
import PropTypes from 'prop-types'
import './button.scss'
function Button({title, ClassName}) {
  return (
    <button className={`button ${ClassName}`}>
      {title}
    </button>
  )
}

Button.propTypes = {

}

export default Button

