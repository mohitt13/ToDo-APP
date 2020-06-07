// import React from 'react';
// // import logo from './logo.svg';
// import './App.json';
//
//
// function App() {
//     function add() {
//         if (document.getElementById('scripts').value==='other') {
//             let element = document.createElement("input");
//             console.log("true");
// //Assign different attributes to the element.
//             element.setAttribute("type", "text");
//             element.setAttribute("value", "");
//             element.setAttribute("name", "label");
//             element.setAttribute("style", "width:200px");
//
//             // let other = document.getElementById('other');
//             // other.appendChild(element);
//             document.body.appendChild(element);
//         }
//
//
//     }
//   return (
//     <div className="App">
//
//         <form action={"http://localhost:3001"} method={"POST"}>
//         <input id={"task"} name={"task"} placeholder={"Task"} className={"text_area"}/>
//          <button className="btn" type={"submit"}>Add</button><br/>
//         </form>
//         <select id={"scripts"}  name={"label"} onChange={add}>
//             <option value={"Personal"}>Personal</option>
//             <option value={"Company"}> Company </option>
//             <option value={"Shopping"}>Shopping</option>
//             <option value={"other"} id={"other"} >Other</option>
//         </select><br/><br/>
//         <button>jijijiijii</button>
//
//     </div>
//   );
// }
//
// export default App;


// import React from 'react';
// import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
//
//
// export default function Example () {
//
//     return (
//         <UncontrolledDropdown>
//             <DropdownToggle caret>
//                 Dropdown
//             </DropdownToggle>
//             <DropdownMenu>
//                 <DropdownItem >Personal</DropdownItem>
//                 <DropdownItem>Shopping</DropdownItem>
//                 {/*<DropdownItem divider />*/}
//                 <DropdownItem>Other</DropdownItem>
//             </DropdownMenu>
//         </UncontrolledDropdown>
//     );
// }

import React from 'react'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Login from "./Login"
import Signup from "./Signup"
import "./App.css"

export default function App() {
    return (

        <Router >
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Signup}/>


                <div className={"but"}>
                    <h1>Todo App</h1>
                    <Link to={'/signup'}>
                        <button className='bt'>Signup</button>
                    </Link>
                    <Link to={'/login'}>
                        <button className='bt'>Login</button>
                    </Link>


                </div>

            </Switch>
        </Router>


    );
}
