import React from 'react';
import ReactDOM from 'react-dom';
import PageTitle from './pagetitle'

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
      <PageTitle title="Helena Agustsson CV" />
      <HomeListe />
      </div>
    )
  }
}

class HomeListe extends React.Component {
  render(){
      return (
          <ul>
              <li>Hello! My name is Helena Agustsson</li>
              <li>Welcome to my online CV</li>
              <li>I built this with React</li>
          </ul>
      );
    }
}

