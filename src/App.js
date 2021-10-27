import './App.css';
import { useState } from 'react';
import UploadLoading from 'components/imageloading';
import UploadImage from 'components/upload';
import UploadComplete from 'components/uploadcomplete';

function App() {

  const [gcpImageObjectLink, setSelectedFile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [errorMessage, setError] = useState();

  return (
    <div className="App">

      {
        !isLoading && !isComplete &&
          <UploadImage 
            setSelectedFile={setSelectedFile} 
            setIsLoading={setIsLoading}
            setIsComplete={setIsComplete}
            setError={setError}
            errorMessage={errorMessage}
        />
      }

      { isLoading && <UploadLoading/> }

      { isComplete && <UploadComplete gcpImage={gcpImageObjectLink}/> }

    </div>
  );
}

export default App;
