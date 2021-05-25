import * as React from 'react';


export default class PageTitle extends React.Component {
    render(){
      return <h3>{this.props.title}</h3>;
    }
}
