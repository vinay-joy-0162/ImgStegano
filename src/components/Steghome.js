import React from "react";
import home from "./Styles/home.css";
import { Card } from "react-bootstrap";
import  Homecard from '../components/homecard';

function Home () {

    const title = "Welcome to Steg"

    // let link = "https://www.kaspersky.com/resource-center/definitions/what-is-steganography";
    const Link = "https://www.kaspersky.com/resource-center/definitions/what-is-steganography"
    return(
        <div className="Home">

<h1 className="title_2"> <u>{ title } </u></h1>


<br/>
<p className="para_1">"Stge" this is a tool which will help you to transfer your messages confidentially through an Image.</p>
   <p className="para_1"> It's a web-based Image steganography. A user-friendly website for you to do steganography process quickly and efficently.</p>
    <br />
  <p> To know more about steganography press the link below </p>

  {/* <a href="{ https://www.kaspersky.com/resource-center/definitions/what-is-steganography } "> Know steganography </a> */}
 
  <a href={Link} target="_blank" rel="noreferrer noopener">
        Know steganography
</a>


<h2 className="title_1">How Steg works?</h2>

< Homecard />






        </div>
    )
} 

export default Home;