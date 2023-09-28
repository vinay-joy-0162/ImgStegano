import { useState } from "react";
import '../components/Styles/upload.css';
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
import Embedd from "./embed";

import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Transfer from "./Sending";
import axios from "axios";
import { Button } from "react-bootstrap";

// import { Link } from 'react-router';






function UploadButton() {

  // let page = <Route path="/Transfer" element={<Transfer/>}/>


  const [image, setImage] = useState(null)
  const [filename, setFileName] = useState("No Selected File")

  function onSubmit(e){
    e.preventDefault();
    axios.post('http://127.0.0.1:5000/encode', e.target).then((res) => {
      console.log(res.data);

      if(res.data.returnCode == 0){
        window.alert("encoded");
      }

    });
  }

  return (
    
     
    <div >


<h2 className="title">Encode</h2>


          <form  className="form1"
           onSubmit={onSubmit}
          >
              <input type="file" accept='image/*'  
                onChange={( { target: {files}}) => {

                  files[0] && setFileName(files[0])
                  if(files){
                    setImage(URL.createObjectURL(files[0]))
                  }

                }} 
          className="form-control"
                name="file_ip"
              />

              {image ?
                  <img className="img" src={image} width={400} height={400} alt={filename} />
                  :
                  <>
                 
                  </>
                  
              }


            <br />
            <br />


            <h2 className="embed"> Embed the Text</h2>
            <br />
            <p>Add the text below in the text box to hide the confidential message into the Image</p>
            {/* <Embedd /> */}
            
            <input className="input1" type="text" placeholder="Enter Text" name="text_ip" />

            {/* // Define the string
var decodedStringBtoA = 'Hello World!';
 Encode the String
var encodedStringBtoA = btoa(decodedStringBtoA);

console.log(encodedStringBtoA); */}
         
            <br/>
            <br/>
{/* 
            <input className="input_btn" type="submit" value="Encode" /> */}
            <Button className="btn"  varaiant="Danger" type="submit" value="Encode">Embed</Button>
          </form>

        

      <br />
      <br />

   

          <h3>Click the below link for Sending the Image</h3>
      <Link className="link" to="/Transfer">Transfer</Link>
     
    </div>
 
   );
}

export default UploadButton;





























// // function UploadButton() {
// //   return (
// //     <div className="m-3">
// //       <label className="mx-3">Choose file: </label>
// //       <input className="d-none" type="file" />
// //       <button className="btn btn-outline-primary">Upload</button>
// //     </div>




    
// //   );

  
// // }

// // export default UploadButton;




// export default UploadButton;


// import React, { useState } from 'react';

// function UploadButton() {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleUpload = () => {
//     if (selectedFile) {
//       // You can now perform actions with the selectedFile, like sending it to a server
//       console.log('Selected file:', selectedFile);
//       // Reset the selected file
//       setSelectedFile(null);
//     } else {
//       console.log('No file selected.');
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload</button>
//     </div>
//   );
// }

// export default UploadButton;





///This below code is also executabel





// import React, { useState } from 'react';
// import axios from 'axios'; // You'll need to install this package

// const UploadButton = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleUpload = () => {
//     if (selectedFile) {
//       const formData = new FormData();
//       formData.append('file', selectedFile);

//       axios.post('/upload', formData) // Replace with your API endpoint
//         .then(response => {
//           console.log('File uploaded successfully!', response);
//         })
//         .catch(error => {
//           console.error('Error uploading file:', error);
//         });
//     }
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload</button>
//     </div>
//   );
// };

// export default UploadButton;


