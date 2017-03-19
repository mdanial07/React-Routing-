import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, IndexRoute, browserHistory } from "react-router"
import About from "./Components/About"
import Contact from "./Components/Contact"
import Home from "./Components/Home"

ReactDOM.render(

  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>

    <Route path="/Contact" component={Contact} />
    <Route path="/About" component={About} />
  </Router>,
  document.getElementById('root')
);







// function reducer (state,action)
// {
//   switch(action.type)
//   {
//     case "INCREMENT":
//     return  newState
//   }
// }


// store.dispatch(
//   return {
//     type: "INCREMENT"
//   }
// )
