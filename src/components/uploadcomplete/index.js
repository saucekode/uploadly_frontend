import Button from '../UI/button'
import React from 'react'
import '../../App.css'
import Container from '../UI/container'
import complete from '../../assets/complete.png'
import success from '../../assets/success.jpg'

const UploadComplete = () => {
  return (
    <Container width="400px" height="454px">
      <img src={complete} alt="upload completed" height="35px" width="35px"/>
      <h5 className="primary-color font-lg pt-10">Uploaded successfully!</h5>
      <div className="pt-20">
        <img src={success} alt="uploaded successfully" width="338px" height="224px" style={{borderRadius: '12px'}}/>
      </div>
      <div className="pt-20 linkStyle">
        <input type="text" className="font-sm" readonly placeholder="https://images.yourdomain.com/photo-1496950866446-325..."/>
        <div className="btnAlign">
          <Button text="Copy link" width="85px"></Button>
        </div>
      </div>
    </Container>
  )
}

export default UploadComplete
