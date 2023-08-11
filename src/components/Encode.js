import { useState } from "react";
import '../components/Styles/upload.css';
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
import Embedd from "./embed";
import { Container } from "react-bootstrap";



function UploadButton() {

  const [image, setImage] = useState(null)
  const [filename, setFileName] = useState("No Selected File")
  return (

     
    <div>
      

      <main className="form_img">
          <form className="form_btn" 
            onClick={ () => document.querySelector(".input-field").click()}
          >
              <input type="file" accept='image/*' className="input-field" hidden
              onChange={( { target: {files}}) => {

                files[0] && setFileName(files[0].name)
                if(files){
                  setImage(URL.createObjectURL(files[0]))
                }

              }} 
              />

              {image ?
                <img src={image} width={250} height={200} alt={filename} />
                :
                <>
                <MdCloudUpload color="#1475cf" size={60} />
                <p>Browse Image to Upload</p>
                </>
                
            }

          </form>



       
          {/* <section>
            <AiFillFileImage color="#1475cf" />
            <span>
              <MdDelete />
            </span>
          </section> */}
        </main>


      <Embedd />

      
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


