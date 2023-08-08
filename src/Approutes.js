import React from "react";
import {Route, Routes} from "react-router-dom";
import UploadButton from './components/Encode';
import Home from './components/Steghome';
import Decode from './components/Decode';

function AppRoutes () {
    return(
        <div className="Home">


<Routes>
    <Route path="/" element={<Home />}/>
    <Route path="Decode" element={<Decode />}/>
    <Route path="Encode" element={<UploadButton />}/>


  </Routes>


        </div>
    )
} 

export default AppRoutes;