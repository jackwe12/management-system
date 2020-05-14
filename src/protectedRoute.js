import {Redirect, Route} from "react-router-dom";
import React from "react";


//有token就傳到component, 否則導回login
const ProtectedRoute = ({component: Component, path, ...rest}) => (
    <Route {...rest}
           path={path}
           render={(props) => (
                localStorage.getItem('token') 
                //    2>1
                   ? <Component {...props} />
                   : <Redirect to={{
                       pathname: '/login',
                       state: {
                           prevPath:props.location.pathname,
                           error:'You have to login first!'
                           }
                   }}/>
           )}/>
);


export default ProtectedRoute;