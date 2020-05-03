import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login/login';
import Home from './components/Home/home';
import './main.css';
import ProtectedRoute from './protectedRoute';
function Main (){
    return (
        <Router>
            <Route path="/login"  component = {Login} />
            {/* <Route path="/student/studentList" component = {StudentList} />
            <Route path="/course" component = {Home} />
            <Route path="/interview" component = {Home} />
            <Route path="/teacher" component = {Home} /> */}
            {/* <Route path="/" exact={true} component= {Home} /> */}
            <ProtectedRoute path="/" exact component= {Home} />
        </Router>
    )
}

export default Main;