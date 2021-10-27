import React from 'react'
import '../../App.css'

const Error = ({text, close}) => {
  return (
    <div className="error_style">
      <p>{text}</p>
      <p onClick={close}>&#10005;</p>
    </div>
  )
}

export default Error
