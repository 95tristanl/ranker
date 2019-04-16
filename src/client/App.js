import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import HeaderNav from "./components/headerNav/headerNav.js"
import HomePage from "./pages/homePage/homePage.js"
import SubmitPage from "./pages/submitPage/submitPage.js"
import VotePage from "./pages/votePage/votePage.js"
import ChartPage from "./pages/chartPage/chartPage.js"
import AuthContext from "./context/context.js";

class App extends Component {
    state = {
        alreadyVoted: []
    };

    updateContext = (item) => {
        let lst = this.state.alreadyVoted;
        lst.push(item);
        this.setState({alreadyVoted: lst});
    }

    render() {
        return(
            <BrowserRouter>
                <AuthContext.Provider
                    value={{
                        alreadyVoted: this.state.alreadyVoted,
                        updateContext: this.updateContext
                    }}>
                    <HeaderNav/>
                    <Switch>
                        <Redirect from={"/"} to={"/home"} exact/>
                        <Route path={"/home"} component={HomePage} exact/>
                        <Route path={"/submit"} component={SubmitPage} exact/>
                        <Route path={"/vote"} component={VotePage} exact/>
                        <Route path={"/chart"} component={ChartPage} exact/>
                    </Switch>
                </AuthContext.Provider>
            </BrowserRouter>
        );
    }
}

export default App;
