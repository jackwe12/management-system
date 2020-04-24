import {Redirect, Route} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

const ProtectedRoute = ({component: Component, isAuthenticated, ...rest}) => (
    <Route {...rest}
           render={(props) => (
                isAuthenticated === true
                   ? <Component {...props} />
                   : <Redirect to={{
                       pathname: '/login',
                   }}/>
           )}/>
);

const mapStateToProps = state => {
    return {
        //if is true, then can log in
        isAuthenticated: state.auth.isAuthenticated ,
    };
};

export default connect(mapStateToProps, null, null, {pure: false})(ProtectedRoute);
