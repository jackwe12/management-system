import {AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT} from '../actions/actionTypes';


const initialState = {
    token: null,
    isFetching: false,
    isAuthenticated:localStorage.getItem('token') ? true: false,
    error: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case AUTH_START:
            return Object.assign({}, state, {isFetching: true, isAuthenticated: false});
        case AUTH_SUCCESS:
            return Object.assign({}, state, {isFetching: false, isAuthenticated: true, token: action.token});
        case AUTH_FAIL:
            return Object.assign({}, state, {isFetching: false, isAuthenticated: false});
        case AUTH_LOGOUT:
            return Object.assign({}, state, {isFetching: true, isAuthenticated: false});
        default:
            return state;
    }
}

export default reducer;