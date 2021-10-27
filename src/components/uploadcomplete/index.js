import Button from '../UI/button'
import React, {useState, useEffect} from 'react'
import '../../App.css'
import Container from 'components/UI/container'
import complete from 'assets/complete.png'
import copy from "copy-to-clipboard";  
import Success from 'components/toast';

const UploadComplete = ({gcpImage}) => {

  const [copyText, setCopyText] = useState();
  const [isSuccessful, setIsSuccessful] = useState(false);


  useEffect(() => {
    setCopyText(gcpImage)
  }, [gcpImage])
    
  const copyToClipboard = () => {
      copy(copyText);
      setTimeout(() => {
        setIsSuccessful(false)
      }, 5000);
      setIsSuccessful(true)
  }

  return (
    <Container width="400px" height="454px">
      {isSuccessful && <Success text="Link copied to clipboard!" isClosing={false} bg="#46cc8d"/> }
      <img src={complete} alt="upload completed" height="35px" width="35px"/>
      <h5 className="primary-color font-lg pt-10">Uploaded successfully!</h5>
      <div className="pt-20 uploadImg ">
        <img src={gcpImage} alt="uploaded successfully"/>
      </div>
      <div className="pt-20 linkStyle">
        <input style={{color: '#000'}} type="text" className="font-sm" readOnly value={gcpImage}/>
        <div className="btnAlign">
          <Button text="Copy link" width="85px" action={copyToClipboard}/>
        </div>
      </div>
    </Container>
  )
}

export default UploadComplete
