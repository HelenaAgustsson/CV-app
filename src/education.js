import * as React from 'react';
import PageTitle from './pagetitle';

export default class Education extends React.Component {
    render(){
        return (
        <div>
        <PageTitle title="Education"/>
        <UtdanningListe />
        </div>
        );
    }
}

class UtdanningListe extends React.Component {
    render(){
        return (
            <ul>
                <li>MSc Management from Loughborough University </li>
                <li>BA History with French from Kingston University </li>
                <li>One-year programme in Natural Sciences from the University of Oslo</li>
            </ul>
        );
      }
}
