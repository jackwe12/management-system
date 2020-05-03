import * as actionTypes from './actionTypes';
import axios from 'axios';
import '../../config/axiosSetting';
import servicePath from '../../config/apiUrl';

//ref: https://auth0.com/blog/secure-your-react-and-redux-app-with-jwt-authentication/
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,        
    }
}

export const authSuccess = (token) => {
    return{
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}
export const authFail = (err) => {
    return{
        type:actionTypes.AUTH_FAIL,
        err:err
    }
}
export const authLogOut = (err) => {
    return{
        type:actionTypes.AUTH_LOGOUT,
        err:err
    }
}

export const auth = (name, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const url = servicePath.teacherLogin;
        const authData = {
            //req.body.name & req.body.password
                name: name,
                password: password
        }
        return axios.post(url, authData)
        .then(res => {
            //成功拿到token
            localStorage.setItem('token', res.data.datas.token)
            dispatch(authSuccess(res.data.datas.token));
        })
        .catch(err => {
            dispatch(authFail(err))
        })
    
    }
}