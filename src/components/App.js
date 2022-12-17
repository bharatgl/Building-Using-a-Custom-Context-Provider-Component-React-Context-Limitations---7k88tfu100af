import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <LocationDisplay />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
}

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

function LocationDisplay() {
  const location = useLocation();

  return <div data-testid="location-display">{location.pathname}</div>;
}

function Home() {
  return <div>You are home.</div>;
}

function About() {
  return <div>You are on the about page.</div>;
}

function NoMatch() {
  return <div>No match</div>;
}

export default App;
