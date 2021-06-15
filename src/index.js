import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  HashRouter,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import PageTitle from './pagetitle';
import HomePage from './Home';
import Education from './education';
import Career from './career';

class Home extends React.Component {
  render() {
    return <HomePage />;
  }
}

class EducationPage extends React.Component {
  render() {
    return <Education />;
  }
}

class CareerPage extends React.Component {
  render() {
    return <Career />;
  }
}

class Menu extends React.Component {
  render() {
    return (
      <div>
        <NavLink to="/">About me</NavLink>
        <NavLink to="/page1"> | Education </NavLink>
        <NavLink to="/page2"> | Career history </NavLink>
        <NavLink to="/page3"> | Interests </NavLink>
      </div>
    );
  }
}

ReactDOM.render(
  <HashRouter>
    <div>
      <Menu />
      <Route exact path="/" component={Home} />
      <Route exact path="/page1" component={EducationPage} />
      <Route exact path ="/page2" component={CareerPage} />
    </div>
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
