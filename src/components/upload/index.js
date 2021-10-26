import Button from 'components/UI/button'
import React, {useCallback} from 'react'
import '../../App.css'
import Container from 'components/UI/container'
import image from 'assets/image.png';
import {useDropzone} from 'react-dropzone';
import axios from 'axios';


const UploadImage = () => {

  const ImageDropzone = () => {
    const onDrop = useCallback(acceptedFiles => {
      // Do something with the files
      const file = acceptedFiles[0];

      const formData = new FormData();
      formData.append("imageFile", file)

      axios.post(
        "http://localhost:8080/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      ).then((res) => {
        console.log("File uploaded successfully!")
        console.log(res.data.files[0])
      }).catch(error => {
        console.log(error)
      });

    }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  
    return (
      <div className="dropzone verticalAlign" {...getRootProps()}>
        <input className="inputAlign" {...getInputProps()}/>
        <img src={image} alt="upload"/>
        
        {
          isDragActive
            ?
          <p className="font-md faded-gray pt-15"></p> 
          :
          <p className="font-md faded-gray pt-15">Drag & Drop your image here</p> 
        }
      </div>
    )
  }

  return (
    <Container width="402px" height="469px">
      <h5 className="primary-color font-lg">Upload your image</h5>
      <p className="font-md secondary-color pt-15">File should be Jpeg, Png,...</p>
      <ImageDropzone/>
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
