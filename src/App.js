import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Portfolio from './components/portfolio';
import Testimonials from './components/testimonials';
import Pricing from './components/pricing';
import Navbar from './components/customnavbar';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/testimonials' component={Testimonials} />
          <Route exact path='/pricing' component={Pricing} />
        </div>
      </Router>
    );
  }
}

export default App;
