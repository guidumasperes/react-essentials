import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom"; //Import router

/**
 * npm start -> start react app
 * npm test -> runs any sort of tests
 */

/**
 * When we create a React application we're creating what's called the single page app. A single page
 * app is a single page and JS is going to load info and change the UI. To help us change page to page
 * we use a React Router 
 */

/*
function AppTwo() {
  return <h1>This is the Second App</h1>;
}

ReactDOM.render(
  This React.createElement() function creates an element
  first param is the element we want to create
  second is any properties we want
  the last is the content of the element
  
  React.createElement("h1", 
  {style: {color:"blue"}}, 
  "Hello React!"),
  document.getElementById('root')
); 
The first parameter of this function is the element we want to create
The second is where we want to put it(in what part of the html page)


ReactDOM.render(
  <ul>
    <li>Cat</li>
    <li>Dog</li>
    <li>Fish</li>
  </ul>,
  document.getElementById('jsx-test')
);
//The first argument of this function above is what is called: JSX


ReactDOM.render(
  <React.Fragment>
    <App/>
    <AppTwo/>
  </React.Fragment>,
  document.getElementById('root')
);
/*
We only can render one component, we can't render tow sibling componenets unless they're wrapped
in some sort of another tag(like "div" )
Too solve this we can wrap the content in a React.Fragment
You can also, only use <> ... </> as a shorthand to React.Fragment
*/

/* -------------------------------------------------------------------------------------------------- */

/*Conditionally render
ReactDOM.render(<App authorized={false}/>,document.getElementById('root'));

//Array destructuring
const [mostImportantItem,,lastImportantItem] = ["Shirt", "Coat", "Boot"];
console.log(mostImportantItem, lastImportantItem);
*/

/* -------------------------------------------------------------------------------------------------- */

//ReactDOM.render(<App login="guidumasperes"/>, document.getElementById('root'));

/* -------------------------------------------------------------------------------------------------- */

//Wrap App component in the router and this will give the app access to all the router properties 
ReactDOM.render(
  <Router>
    <App />
  </Router>, 
  document.getElementById('root')
);
