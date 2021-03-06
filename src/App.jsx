import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from './Home'
import About from './About'



export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'Hello Wlord'
    }
  }
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" />
        </Switch>
      </HashRouter>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
