import React from "react";
import { useState } from "react";
import '../components/Styles/upload.css';
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
import { Button } from "react-bootstrap";
import decode from './Styles/decode.css';
import axios from "axios";

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container } from 'react-bootstrap';




function Decode () {
   
    const [image, setImage] = useState(null)
    const [filename, setFileName] = useState("No Selected File")
    const [text, setText] = useState("")


    function onSubmit (e) {
      // prevents refreshing a page
      e.preventDefault();
      
      console.log(e.target);
      axios.post('http://127.0.0.1:5000/decode', e.target).then((res) => {
        console.log(res.data);

        setText(res.data.data);

      });


    }

    return (
        <div >
            <h2 className="decode"> Decode</h2>

            <br />
          

  

     

          <form 
            
            onSubmit={onSubmit}

          >
              <input type="file" accept='image/*' 
              onChange={( { target: {files}}) => {

                files[0] && setFileName(files[0].name)
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
                // <>
             
                // </>
                <br />
                
                

                
            }
    
          
    <Button className="bton"  varaiant="Danger" type="submit">Decode</Button>
          </form>
           
 
        
         

       
         

      



    <Container>
    {text}
   

  
    
    
{/*       
      <InputGroup className="text_box">
        <InputGroup.Text id="inputGroup-sizing-default">
          Decrypted Text
      
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          
        />

      </InputGroup  > */}
      

      <br />

     
      <br ></br>
     
      </Container>
    




        </div>
    )
}

export default Decode; 