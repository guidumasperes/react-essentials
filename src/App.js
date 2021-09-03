import './App.css';
import restaurant from './restaurant.jpg';

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
