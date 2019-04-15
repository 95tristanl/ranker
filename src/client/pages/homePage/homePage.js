import React, { Component } from 'react';
import './homePage.css';

class HomePage extends Component { //export default
    constructor() {
        super();
    }

    render() {
        return (
            <div className="homePage">
                <h1>Just A Simple React App</h1>
            </div>
        );
    }
}

export default HomePage;

/*
console.time('benchmark');
//any code here, this tests time it takes to run code
console.timeEnd('benchmark');
*/
