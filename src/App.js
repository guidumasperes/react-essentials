import { useState, useEffect, useReducer } from 'react'; //Importing hooks, useState, useEffect
import './App.css';
import restaurant from './restaurant.jpg';
import { Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Events,
  Contact,
  Whoops404,
  Services,
  CompanyHistory,
  Location
} from "./pages"

/* What is a component ?
A component is a little piece of the UI that we are going to use 
to describe one part of our application.

We create a component by creating a function, the function returns JSX

Every react component has access to this object called "props"
They hold all different properties for our component
To add values to a component(his props) we need to add them to the place where the
component is being rendered

If we are passing a variable to props we enclose it with curly braces
Quotes are for strings
*/

/*
function Header(props) {
  console.log(props);
  return(
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return(
    <section>
      <p>We serve the most {props.adjective} food around!</p>
      <img src={restaurant} height={200} alt="napkin and fork at a restaurant table"/>
      <ul style={{textAlign: "left"}}>
        {props.dishes.map((dish) => (
          <li key={dish.id}> {dish.title} </li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return(
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

//We need to adjust this a little bit to avoid errors with keys in react
const dishes = [
  "Ribs with bacon",
  "Hamburguer",
  "Beef with grilled cheese"
];
//Lets transform dishes in objs 
const dishesObjs = dishes.map((dish, i) => ({id:i, title:dish}));
//Keys can help to keep you data sync as the application changes over time 

function App() {
  return (
    <div className="App">
      <Header name="Gordon"/>
      <Main adjective="amazing" dishes={dishesObjs}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
*/

/* ---------------------------------------------------------------------------------------------------- */

/*We can render component conditionally
function SecretComponent() {
  return <h1>Super secret information for authorized users only</h1>;
}

function RegularComponent() {
  return <h1>Everyone can see this component</h1>;
}

//Render component based on specific properties(props)
function App({authorized}) { //This is object destructuring
  return (
    <>
      {authorized ?<SecretComponent /> : <RegularComponent />};
    </>
  );
}

export default App;
*/

/* ---------------------------------------------------------------------------------------------------- */

/*
The most modern way to handle state variables in an app is to use a function called "useState"
What useState() does ? It returns an array, the first item it's our state variable and the second
is is a function that we're going to use to update state.

function App() {
  //Pass initial state to our state function(1st param) when app first runs
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  /* Another important hooks of React.js is useEffect(), it's use to manage side effects that aren't
  related to the components render(ex, console msgs, loading data, etc...)
  
  //Using useEffect() to console log the current emotion
  useEffect(() => {
    console.log(`It's ${emotion} around here!`);
  }, [emotion]); //useEffect() takes a callback function as 1st param and the dependency array as a 2nd param
  // If you pass an empty array the props and state inside the effect will always have the initial vals 
  // then the log out will be displayed only one time, but if you pass a value the value will be
  // displayed whenever the variable changes, if you don't specify values will be showed all the time

  useEffect(() => {
   console.log(`It's ${secondary} around here!`); 
  }, [secondary]);

  return (
    <>
      <h1>Current emotion is {emotion} and {secondary}</h1>
      <button onClick={() => setEmotion("happy")}>Make Happy</button>
      <button onClick={() => setSecondary("crabby")}>Make Crabby</button>
      <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
      <button onClick={() => setEmotion("enthusiastic")}>Enthuse</button>
    </>
  );
}

export default App;
*/

/* ------------------------------------------------------------------------------------------------- */


/*
function App() {
  //useReducer() simplifies the use of reducer functions, it receives two args, the first is the function
  // to change the state and the second is the initial state
  const [checked, toggle] = useReducer((checked) => !checked, false);

  /*This is a reducer function, a reducer function takes the current state and returns a new state
  function toggle() {
    setChecked((checked) => !checked); 
  }

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle}/>
      <p>{checked ? "checked" : "not checked"}</p>
    </>
  );
}

export default App;
*/

/* ------------------------------------------------------------------------------------------------- */

//Fetching data with Hooks

//When making http requests there are three possible states:
//1)Pending or loading.
//2)Success.
//3)Failed.

// https://api.github.com/users/guidumasperes


/*
function App({login}) {
  //Let's create a data variable and a function to change the data
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!login) return; //If there's no login just quit
    setLoading(true); //Otherwise, set loading to true
    fetch(`https://api.github.com/users/${login}`) //fetch for user
      .then(response => response.json()) //take response and convert to to json
      .then(setData) //update data
      .then(() => setLoading(false)) //after update data set load to false
      .catch(setError); //if loading goes wrong set error
  }, [login]); //pass empy array to fetch data only when the component renders

  //Now check for variables values and deal with its states
  if (loading) return <h1>Loading...</h1>;

  if (error) 
    return <pre>{JSON.stringify(error, null, 2)}</pre>;

  if (!data) return null;

  //default behavior, lets assume everything goes well
  return (
    <div>
      <h1>{data.login}</h1>
      <img src="https://avatars.githubusercontent.com/u/48294592?v=4" alt="user avatar"/>
    </div>
  );
}

export default App;

*/

/* ------------------------------------------------------------------------------------------------- */

//The app component is responsible for the other pages of the site
//So we need to wrap our pages in <Route>
//We can nest links too
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}>
          <Route path="/services" element={<Services />}/>
          <Route path="/history" element={<CompanyHistory />}/>
          <Route path="/location" element={<Location />}/>
        </Route>
        <Route path="/events" element={<Events />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<Whoops404 />}/>
      </Routes>
    </div>
  );
}

export default App;