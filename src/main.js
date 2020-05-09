import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './pages/Login/login';
import Home from './pages/Home/home';
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