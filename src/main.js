import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/Login/login';
import Home from './components/Home/home';
import './styles/main.css';
import ProtectedRoute from './protectedRoute';

function Main (){
    return (
        <Router>
            <Switch>
                <Route path="/login" component = {Login} />
                <Route path="/" exact component = {Login} />

                <ProtectedRoute path="/*" exact component= {Home} />
            </Switch>
        </Router>
    )
}

export default Main;