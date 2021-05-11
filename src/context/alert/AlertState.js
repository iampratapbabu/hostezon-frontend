import React,{useReducer} from "react";
import * as uuid from 'uuid';
import AlertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";

import {SET_ALERT,REMOVE_ALERT}from '../types';

const AlertState = (props) =>{
    const initialState = [];

    const [state,dispatch] = useReducer(AlertReducer,initialState);

    //reducer fumctions
    //set alert
    const setAlert = (msg,type,timeout=5000) =>{
        const id = uuid.v4();
        console.log(id,"This is running inside setAlert");
        console.log(msg);
        dispatch({
            type:SET_ALERT,
            
            payload:{msg,type,id}
        });
        setTimeout(() => dispatch({type:REMOVE_ALERT,payload:id}),timeout);
    };

    //test function
    const testFunction = () =>{
        console.log("Test fucntion is running in alertstate");
    }

    //remove alert
    const removeAlert = () => console.log("alert removed");

    return(
        <AlertContext.Provider
        value={{
            alerts:state,
            setAlert,
            removeAlert,
            testFunction
        }}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState;