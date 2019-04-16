import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import HeaderNav from "./components/headerNav/headerNav.js"
import HomePage from "./pages/homePage/homePage.js"
import SubmitPage from "./pages/submitPage/submitPage.js"
import VotePage from "./pages/votePage/votePage.js"
import ChartPage from "./pages/chartPage/chartPage.js"
import App from './App.js';

ReactDOM.render( <App/>, document.getElementById('root') );
