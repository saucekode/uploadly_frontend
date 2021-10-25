import React from 'react'
import '../../../App.css'

const Container = (
  {
    width,
    height,
    children
  }
) => {

  const style = {
    width: width,
    height: height,
    background: '#fff',
    borderRadius: '12px'
  }

  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Container
