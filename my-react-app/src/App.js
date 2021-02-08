import './App.css';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import Home from './pages/home';
import MainPage from './pages/main-page';
import OtherPage from './pages/other-page';
import CSSBackdrop from './pages/css-backdrop';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mainpage">Main page</Link>
            </li>
            <li>
              <Link to="/otherpage">Other page</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route path="/mainpage">
          <MainPage />
        </Route>
        <Route path="/otherpage">
          <OtherPage />
        </Route>
        <Route path="/cssbackdrop">
          <CSSBackdrop />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
