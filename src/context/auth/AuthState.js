import React,{useReducer} from "react";
import axios from 'axios';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';

import setAuthToken from '../../utils/setAuthToken';

import {REGISTER_SUCCESS,REGISTER_FAIL,
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

    //load user
    const loadUser = async() => {

        // if(localStorage.token)
        //     setAuthToken(localStorage.token);


        try{
            const res = await axios.get(`${process.env.REACT_APP_URL}/hostezon/v1/users/singleuser`,{
                headers:{
                    'x-auth-token':localStorage.token
                }
            });
            dispatch({
                type:USER_LOADED,
                payload:res.data});
        }catch(err){
            dispatch({type:AUTH_ERROR});
        }
    }

    //register user
    const register = async formData =>{
        const config={
            headers:{
                'Content-Type':'application/json'
            }
        };
        try{
            const res = await axios.post(`${process.env.REACT_APP_URL}/hostezon/v1/users/signup`,formData,config);
            //console.log(res.data);
            //localStorage.setItem('token',res.data.token);
            dispatch({
                type:REGISTER_SUCCESS,
                payload:res.data
            });
            loadUser();
        }catch(err){
            dispatch({
                type:REGISTER_FAIL,
                payload:err.response.data.message
            });
        }
    };

    //login
    const login = () => console.log("login user");

    //logout
    const logout = () => console.log("logout user");

    //clear errors
    const clearErrors = () => dispatch({type:CLEAR_ERRORS});


    return(
        <AuthContext.Provider
        value={{
            token:state.token,
            user:state.user,
            isAuthenticated:state.isAuthenticated,
            loading:state.loading,
            error:state.error,
            register,
            loadUser,
            login,
            logout,
            clearErrors
        }}>
        {props.children}
        </AuthContext.Provider>
    )

};

export default AuthState;