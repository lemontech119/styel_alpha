import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './containers/Home';
import About from './containers/About';
import Carlist from './containers/Carlist';
import './Header.css';


function App() {
  return (
    <Router>
      <div>
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/Carlist" component={Carlist} />
      </div>
    </Router>
  );
}

const MenuItem = ({active, children, to}) => (
  <div className="menu-item">
          {children}
  </div>
)

const Header = () => {
  return (
      <div>
          <div className="logo">
              Styel
          </div>
          <div className="menu">
              <Link to="/"><MenuItem>홈</MenuItem></Link>
              <Link to="/about"><MenuItem>소개</MenuItem></Link>
              <Link to="/carlist"><MenuItem>카 테스트</MenuItem></Link>
          </div>
      </div>
  );
};
export default App;