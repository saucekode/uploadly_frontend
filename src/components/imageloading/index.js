import Container from 'components/UI/container'
import React from 'react'

const UploadLoading = () => {


  return (
    <Container width="400px" height="144px" padding="0 25px">
      <h5 className="primary-color font-lg alignSelfStart">Uploading...</h5>
      <div className="loader-container">
        <div className="loader-indicator"></div>
      </div>
    </Container>
  )
}

export default UploadLoading
