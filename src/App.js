import './App.css';
import UploadLoading from 'components/imageloading';
import UploadImage from 'components/upload';
import UploadComplete from 'components/uploadcomplete';

function App() {
  return (
    <div className="App">
      <UploadImage/>
      {/* <UploadLoading/> */}
      {/* <UploadComplete/> */}
    </div>
  );
}

export default App;
