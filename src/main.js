import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './login';
import Home from './home';
import './main.css';

function Main (){
    return (
        <Router>
            <Route path="/login"  component = {Login} />
            {/* <Route path="/student/studentList" component = {StudentList} />
            <Route path="/course" component = {Home} />
            <Route path="/interview" component = {Home} />
            <Route path="/teacher" component = {Home} /> */}
            <Route path="/" exact={true} component= {Home} />
        </Router>
    )
}

export default Main;