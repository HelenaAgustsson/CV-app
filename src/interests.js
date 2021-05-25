import * as React from 'react';
import { Component } from 'react-simplified';
import { PageTitle } from './pagetitle';

export default class Interests extends Component {
    render(){
        return (
        <div>
        <PageTitle title="Interesser"/>,
        <InterestsList />
        </div>
        );
    }
}

class InterestsList extends Component {
    render(){
        return (
            <ul>
                <li>Icelandic Sagas </li>
                <li>Travel </li>
                <li>Photography </li>
            </ul>
        );
      }
}
