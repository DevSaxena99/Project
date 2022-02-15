import React, {useEffect,useState} from "react";
import Country from "./components/country";
import States from "./components/states";
import {Route} from "react-router-dom";
import StateInfo from "./components/stateinfo";
import './App.css';
function App() {

  return (
    <div className="main">
    <Route path="/" exact >
      <h1>Country</h1>
        <Country/>
        <br/><br/>
      <h1>States</h1>
        <States/>
    </Route>

    <Route path="/:state" exact>
      <StateInfo/>
    </Route>
    </div>

  );
}

export default App;
