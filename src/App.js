
import './App.css';
import AppRouter from './routers/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComp from './components/NavComp';
import UploadButton from './components/Encode';


function App() {
  return (
    <div className="App">
        
  <NavComp />
  <AppRouter />


  <h1>
    Steganography
  </h1>
  <p>It's the tool to hide the confidential text into an image</p>

  <UploadButton />

    </div>
  );
 
}

export default App;
