import React from 'react';
import { BrowserRouter, Link, Route } from "react-router-dom";

const First = ()=>{
    return (<div>
      <h1>This is the first page</h1>
      <Link to="/"><img src="/HomeLogo.png" style={{height: "100px"}}/></Link>
      <br></br>
      <Link to="/second">Go to the second page</Link>
    </div>)
  }


  export default First;
  
