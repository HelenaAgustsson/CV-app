import * as React from 'react';
import PageTitle from './pagetitle';

export default class Career extends React.Component {
    render(){
        return (
            <div>
                <PageTitle title="Career history" />
                <CareerList />
            </div>
        );
    }
}

class CareerList extends React.Component {
    render(){
        return (
            <ul>
               <li>CRO Analyst at HSBC </li>
                <li>CRO Analyst at TUI</li>
                <li>Digital Officer at Princess Alice Hospice</li> 
                <li>Communications Assistant at NLT</li> 
            </ul>
        );
    }
}