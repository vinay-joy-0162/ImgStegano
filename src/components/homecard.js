import React from "react";
import { Card } from "react-bootstrap";
import home from "./Styles/home.css";

function Homecard() {

    return (




        <div>

    <Card className="card">
      <Card.Body>
       <u> <Card.Title className="title_card">Steps to follow</Card.Title></u>

               <ol className="para_card"> <li>Browse an Image</li>
                    <li>Add a text</li>
                    <li>Click the Embed button for hiding the text</li>
                    <li>Click the link below the button for sending the embedd Image</li>
                    <li>Choose the encrypted Image</li>
                    <li>Send the Image </li>
                    <li>For decoding Browse the Inage transfered by the sender</li>
                    <li>Finally click the Decode button for revealing the hidden text</li>
                    
                    </ol>
       
        <Card.Text>
      
        </Card.Text>
      
      </Card.Body>
    </Card>
 

        </div>
    )
}
export default Homecard;
