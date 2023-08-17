import React from "react";

function Home () {

    const title = "Welcome to StegImg"

    // let link = "https://www.kaspersky.com/resource-center/definitions/what-is-steganography";
    const Link = "https://www.kaspersky.com/resource-center/definitions/what-is-steganography"
    return(
        <div className="Home">

<h1> { title } </h1>
  <p> To know more about steganography press the link below </p>
  <br></br>
  {/* <a href="{ https://www.kaspersky.com/resource-center/definitions/what-is-steganography } "> Know steganography </a> */}
 
  <a href={Link} target="_blank" rel="noreferrer noopener">
        Know steganography
</a>

        </div>
    )
} 

export default Home;