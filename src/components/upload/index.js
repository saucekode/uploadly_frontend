import Button from '../UI/button'
import React from 'react'
import '../../App.css'
import Container from '../UI/container'
import image from '../../assets/image.png';


const UploadImage = () => {
  return (
    <Container width="402px" height="469px">
      <h5 className="primary-color font-lg">Upload your image</h5>
      <p className="font-md secondary-color pt-15">File should be Jpeg, Png,...</p>
      <div className="dropzone verticalAlign">
        <input type="file" className="inputAlign"/>
        <img src={image} alt="upload"/>
        <p className="font-md faded-gray pt-15">Drag & Drop your image here</p>
      </div>
      <p className="font-sm secondary-color pt-15">or</p>
      <div className="pt-15">
        <Button text="Choose a file">
          <input type="file" className="inputAlign"/>
        </Button>
      </div>
    </Container>
  )
}

export default UploadImage
