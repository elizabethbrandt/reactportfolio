import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>

          <Route exact path="/" component={Home} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
