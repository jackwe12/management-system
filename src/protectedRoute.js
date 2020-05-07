import {Redirect, Route} from "react-router-dom";
import React from "react";
// import {connect} from "react-redux";

//check if we have token or not 
// const isAuthenticated = (localStorage.getItem('token')? true: false);

//有token就傳到component, 否則導回login
const ProtectedRoute = ({component: Component, ...rest}) => (
    <Route {...rest}
           render={(props) => (
                localStorage.getItem('token') 
                //    2>1
                   ? <Component {...props} />
                   : <Redirect to={{
                       pathname: '/login',
                   }}/>
           )}/>
);

// const mapStateToProps = state => {
//     return {
//         //if is true, then can log in
//         isAuthenticated: state.auth.isAuthenticated ,
//     };
// };

// export default connect(mapStateToProps, null, null, {pure: false})(ProtectedRoute);

export default ProtectedRoute;