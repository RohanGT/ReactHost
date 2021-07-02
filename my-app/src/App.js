import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  return (
    <div className="title-banner">
      <h1 className="title">Welcome to Hell</h1>
    </div>
  );
};

const About = () => {
  return <p>Watchu know about rollin down in the deep</p>;
};

const Contact = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>DEETS BRUH</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <div>{name}</div>
    </div>
  );
};

const Routerpoop = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
};

function App() {
  return (
    <>
      <Routerpoop />
    </>
  );
}

export default App;
