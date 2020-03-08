import React from 'react';
import { BrowserRouter, Link, Route } from "react-router-dom";


const Home = ()=>{
    return (<div>
  
      <h1>Home page</h1>
      <Link to="/first">Go to the first page</Link>
      <br></br>
      <Link to="/second">Go to the second page</Link>
    </div>)
  }
  export default Home;