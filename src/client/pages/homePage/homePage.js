import React, { Component } from 'react';
import './homePage.css';

class HomePage extends Component { //export default
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <p className="separator">HOME PAGE</p>
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
