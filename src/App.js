import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
