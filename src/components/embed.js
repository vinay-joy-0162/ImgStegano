// import React from "react";
// import embedd from './Styles/embedd.css'

// function Embedd () {
//     return(

//             <div>
                   
                
//             <form className="text_box">
//               <input type="text" />
//             </form>
          
//             </div>
//     );
// };

// export default Embedd;


// 


import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container } from 'react-bootstrap';
import embedd from './Styles/embedd.css';
import Button from 'react-bootstrap/Button';
import React, {useState, useEffect} from 'react';

 // const [data, setdata] = useState{()}

function SizesExample() {
 
  return (
    <Container>
      
      <InputGroup className="text_box">
        <InputGroup.Text id="inputGroup-sizing-default">
          Add Text
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <br />

      <Button className='btn' variant="success">Embed </Button>{' '}
      <br />
      <br ></br>
     
      </Container>
    
  );
}

export default SizesExample;