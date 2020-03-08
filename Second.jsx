import React from 'react';
import { BrowserRouter, Link, Route } from "react-router-dom";

const Second = ()=>{
    return (<div>
      <h1>This is the second page</h1>
      <Link to="/"><img src="/HomeLogo.png" style={{height: "100px"}}/></Link>
      <br></br>
      <Link to="/first">Go to the first page</Link>
    </div>)
  }

  export default Second;
  