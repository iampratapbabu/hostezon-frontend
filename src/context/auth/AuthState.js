import React,{useReducer} from "react";
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';

import {REGISTER_SUCCESS,RESISTER_FAIL,
    USER_LOADED,AUTH_ERROR,LOGIN_SUCCESS,LOGIN_FAIL,
    LOGOUT,CLEAR_ERRORS} from '../types';

const AuthState = (props) =>{
    const initialState={
        token:localStorage.getItem('token'),
        user:null,
        isAuthenticated:null,
        loading:true,
        error:null

    };
    const [state,dispatch]=useReducer(AuthReducer,initialState);

    //all reducer functions

    return(
        <AuthContext.Provider
        value={{
            token:state.token,
            user:state.user,
            isAuthenticated:state.isAuthenticated,
            loading:state.loading,
            error:state.error
        }}>
        {props.children}
        </AuthContext.Provider>
    )

};

export default AuthState;