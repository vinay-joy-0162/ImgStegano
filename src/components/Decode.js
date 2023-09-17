import React from "react";
import { useState } from "react";
import '../components/Styles/upload.css';
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import { AiFillFileImage } from 'react-icons/ai'
import { Button } from "react-bootstrap";
import decode from './Styles/decode.css';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container } from 'react-bootstrap';




function Decode () {
   
    const [image, setImage] = useState(null)
    const [filename, setFileName] = useState("No Selected File")
    return (
        <div className="Decode">
            <h2>Lets decode!!</h2>

            <br />
          

  

     

      <main>
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

         <Button className="bton"  varaiant="Danger">Decode</Button>






    <Container>
      
      <InputGroup className="text_box">
        <InputGroup.Text id="inputGroup-sizing-default">
          Decrypted Text
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <br />

     
      <br ></br>
     
      </Container>
    




        </div>
    )
}

export default Decode; 