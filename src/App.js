import React from 'react';
// import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">

        <form action={"http://localhost:3001"} method={"POST"}>
        <input id={"task"} name={"task"} placeholder={"Task"} className={"text_area"}/>
         <button className="btn" type={"submit"}>Add</button><br/>
     </form>
    </div>
  );
}

export default App;
