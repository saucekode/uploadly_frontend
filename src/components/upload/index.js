import Button from 'components/UI/button'
import React, {useCallback, useState} from 'react'
import '../../App.css'
import Container from 'components/UI/container'
import image from 'assets/image.png';
import {useDropzone} from 'react-dropzone';
import axios from 'axios';
import Error from 'components/error';


const UploadImage 
= ({
    setSelectedFile, 
    setIsLoading, 
    setIsComplete, 
    setError,
    errorMessage
  }) => {

  const [hasError, setHasError] = useState(false)

  const apiCall = (file) => {

    const formData = new FormData();
    formData.append("imageFile", file)

    axios.post(
      "https://uploadlyapi.herokuapp.com/api/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    ).then((res) => {
      console.log(res.data)

      setTimeout(() => {
        setIsComplete(true)
        setSelectedFile(res.data.result)
        setIsLoading(false)
      }, 2000)

      setIsLoading(true)

    }).catch(error => {
      setError(error.response.data.message)
      setHasError(true)
    });

  }

  const handleImageUpload = (e) => {
    apiCall(e.target.files[0])
  }

  
  const ImageDropzone = () => {
    const onDrop = useCallback(acceptedFiles => {
  
      const file = acceptedFiles[0];

      apiCall(file)

    }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  
    return (
      <div className="dropzone verticalAlign" {...getRootProps()} style={{background: isDragActive && "rgba(0,0,0,0.2)"}}>
        <input className="inputAlign" {...getInputProps()}/>
        <img src={image} alt="upload"/>
        
        {
          isDragActive
            ?
          <></>
          :
          <p className="font-md faded-gray pt-15">Drag & Drop your image here</p> 
        }
      </div>
    )
  }

  return (
    <Container width="402px" height="469px">
      {hasError && <Error text={errorMessage} close={() => hasError(false)}/> }
      <h5 className="primary-color font-lg">Upload your image</h5>
      <p className="font-md secondary-color pt-15">File should be Jpeg, Png,...</p>
      <ImageDropzone/>
      <p className="font-sm secondary-color pt-15">or</p>
      <div className="pt-15">
        <Button text="Choose a file">
          <input type="file" name="uploadFile" className="inputAlign" onChange={handleImageUpload}/>
        </Button>
      </div>
    </Container>
  )
}

export default UploadImage
