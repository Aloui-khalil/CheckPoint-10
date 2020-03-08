import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import First from "./First";
import Second from "./Second";

export default class App extends React.Component {
  render() {
    return (
      
      <BrowserRouter>
        <div className="App">
          <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/first" component={First}/>
          <Route path="/second"  component={Second}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
