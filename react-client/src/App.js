import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
import './App.css';
import Nav from './components/Nav';

const About = ()=> <h1 className="title is-1">About Page</h1>
const Users = ()=> <h1 className="title is-1">Users Page</h1>
function Home() {
    return <h1 className="title is-1">Our New Home Page</h1>
}

function App() {
  return (
    <Router>
    <div className="App">
        <Nav />
        <div className="container">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
